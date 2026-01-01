// 应用状态管理
const state = {
    currentStyle: 'default',
    customSettings: {},
    isMobilePreview: true
};

// 预定义样式主题
const styleThemes = {
    default: {
        name: '经典样式',
        description: '简洁大方,适合各类文章',
        styles: {
            titleColor: '#2c3e50',
            fontSize: 16,
            lineHeight: 1.8,
            paragraphSpacing: 20,
            quoteColor: '#07c160',
            linkColor: '#3498db',
            codeBgColor: '#f5f5f5',
            containerWidth: 677
        }
    },
    elegant: {
        name: '优雅商务',
        description: '商务专业,适合深度文章',
        styles: {
            titleColor: '#1a1a1a',
            fontSize: 15,
            lineHeight: 2,
            paragraphSpacing: 25,
            quoteColor: '#5c6bc0',
            linkColor: '#3f51b5',
            codeBgColor: '#e8eaf6',
            containerWidth: 677
        }
    },
    fresh: {
        name: '清新文艺',
        description: '文艺清新,适合情感类文章',
        styles: {
            titleColor: '#ff6b6b',
            fontSize: 16,
            lineHeight: 1.75,
            paragraphSpacing: 22,
            quoteColor: '#ffd93d',
            linkColor: '#6bcf7f',
            codeBgColor: '#fff9c4',
            containerWidth: 677
        }
    },
    minimal: {
        name: '极简主义',
        description: '极简单纯,突出内容本身',
        styles: {
            titleColor: '#000000',
            fontSize: 15,
            lineHeight: 1.6,
            paragraphSpacing: 15,
            quoteColor: '#999999',
            linkColor: '#333333',
            codeBgColor: '#eeeeee',
            containerWidth: 677
        }
    }
};

// DOM元素引用
const elements = {
    markdownInput: null,
    wechatPreview: null,
    styleSelector: null,
    copyBtn: null,
    clearBtn: null,
    pasteBtn: null,
    settingsBtn: null,
    settingsModal: null,
    closeSettings: null,
    applySettings: null,
    resetSettings: null,
    copySuccess: null
};

// 初始化应用
function init() {
    // 获取DOM元素
    elements.markdownInput = document.getElementById('markdownInput');
    elements.wechatPreview = document.getElementById('wechatPreview');
    elements.styleSelector = document.getElementById('styleSelector');
    elements.copyBtn = document.getElementById('copyBtn');
    elements.clearBtn = document.getElementById('clearBtn');
    elements.pasteBtn = document.getElementById('pasteBtn');
    elements.settingsBtn = document.getElementById('settingsBtn');
    elements.settingsModal = document.getElementById('settingsModal');
    elements.closeSettings = document.getElementById('closeSettings');
    elements.applySettings = document.getElementById('applySettings');
    elements.resetSettings = document.getElementById('resetSettings');
    elements.copySuccess = document.getElementById('copySuccess');

    // 初始化样式选择器
    renderStyleSelector();

    // 绑定事件监听
    bindEvents();

    // 设置默认示例内容
    setDefaultContent();

    // 渲染初始预览
    updatePreview();
}

// 渲染样式选择器
function renderStyleSelector() {
    elements.styleSelector.innerHTML = '';

    Object.entries(styleThemes).forEach(([key, theme]) => {
        const option = document.createElement('div');
        option.className = 'style-option';
        if (key === state.currentStyle) {
            option.classList.add('active');
        }

        option.innerHTML = `
            <div class="style-name">${theme.name}</div>
            <div class="style-desc">${theme.description}</div>
        `;

        option.addEventListener('click', () => selectStyle(key));
        elements.styleSelector.appendChild(option);
    });
}

// 选择样式主题
function selectStyle(styleKey) {
    state.currentStyle = styleKey;

    // 更新选中状态
    document.querySelectorAll('.style-option').forEach((option, index) => {
        const keys = Object.keys(styleThemes);
        if (keys[index] === styleKey) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // 应用样式并更新预览
    updatePreview();
}

// 绑定事件监听
function bindEvents() {
    // Markdown输入监听
    elements.markdownInput.addEventListener('input', debounce(updatePreview, 300));

    // 复制按钮
    elements.copyBtn.addEventListener('click', copyToClipboard);

    // 清空按钮
    elements.clearBtn.addEventListener('click', () => {
        elements.markdownInput.value = '';
        updatePreview();
    });

    // 粘贴按钮
    elements.pasteBtn.addEventListener('click', async () => {
        try {
            const text = await navigator.clipboard.readText();
            elements.markdownInput.value = text;
            updatePreview();
        } catch (err) {
            console.error('粘贴失败:', err);
            alert('无法访问剪贴板,请手动粘贴 (Ctrl+V)');
        }
    });

    // 设置弹窗
    elements.settingsBtn.addEventListener('click', openSettings);
    elements.closeSettings.addEventListener('click', closeSettings);
    elements.applySettings.addEventListener('click', applyCustomSettings);
    elements.resetSettings.addEventListener('click', resetSettings);

    // 点击弹窗外部关闭
    elements.settingsModal.addEventListener('click', (e) => {
        if (e.target === elements.settingsModal) {
            closeSettings();
        }
    });

    // 设备切换
    document.querySelectorAll('.device-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const device = btn.dataset.device;
            elements.wechatPreview.classList.remove('mobile', 'desktop');
            elements.wechatPreview.classList.add(device);
        });
    });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
        // Ctrl+S 保存(阻止默认行为)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            copyToClipboard();
        }

        // ESC 关闭弹窗
        if (e.key === 'Escape') {
            closeSettings();
        }
    });
}

// 更新预览
function updatePreview() {
    const markdown = elements.markdownInput.value;
    const html = marked.parse(markdown);
    elements.wechatPreview.innerHTML = html;

    // 应用当前样式
    applyCurrentStyle();
}

// 应用当前样式
function applyCurrentStyle() {
    const theme = styleThemes[state.currentStyle];
    const settings = { ...theme.styles, ...state.customSettings };

    // 应用样式到预览元素(不影响网站其他部分)
    elements.wechatPreview.style.fontSize = `${settings.fontSize}px`;
    elements.wechatPreview.style.lineHeight = settings.lineHeight;
    elements.wechatPreview.style.color = settings.titleColor;

    // 应用段落间距
    const paragraphs = elements.wechatPreview.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.marginBottom = `${settings.paragraphSpacing}px`;
    });

    // 应用标题颜色
    const headings = elements.wechatPreview.querySelectorAll('h1, h2, h3');
    headings.forEach(h => {
        h.style.color = settings.titleColor;
    });

    // 应用H2标题边框颜色
    const h2Headings = elements.wechatPreview.querySelectorAll('h2');
    h2Headings.forEach(h2 => {
        h2.style.borderLeftColor = settings.quoteColor;
    });

    // 应用引用样式
    const blockquotes = elements.wechatPreview.querySelectorAll('blockquote');
    blockquotes.forEach(bq => {
        bq.style.borderLeftColor = settings.quoteColor;
    });

    // 应用链接颜色
    const links = elements.wechatPreview.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = settings.linkColor;
        link.style.borderBottomColor = settings.linkColor;
    });

    // 应用代码背景色
    const codeBlocks = elements.wechatPreview.querySelectorAll('pre');
    codeBlocks.forEach(code => {
        code.style.backgroundColor = settings.codeBgColor;
    });

    const inlineCodes = elements.wechatPreview.querySelectorAll('code');
    inlineCodes.forEach(code => {
        if (!code.parentElement.tagName.toLowerCase() === 'pre') {
            code.style.backgroundColor = settings.codeBgColor;
        }
    });

    // 应用容器宽度
    elements.wechatPreview.style.maxWidth = `${settings.containerWidth}px`;
}

// 复制到剪贴板
async function copyToClipboard() {
    try {
        // 获取HTML内容
        const html = elements.wechatPreview.innerHTML;

        // 创建临时容器
        const container = document.createElement('div');
        container.innerHTML = html;

        // 处理样式,确保微信公众号兼容性
        const styledHtml = wrapWechatStyles(container.innerHTML);

        // 使用Clipboard API
        const clipboardItem = new ClipboardItem({
            'text/html': new Blob([styledHtml], { type: 'text/html' }),
            'text/plain': new Blob([elements.markdownInput.value], { type: 'text/plain' })
        });

        await navigator.clipboard.write([clipboardItem]);

        // 显示成功提示
        showCopySuccess();
    } catch (error) {
        console.error('复制失败:', error);

        // 降级方案:使用传统的复制方法
        fallbackCopy();
    }
}

// 包装微信公众号样式
function wrapWechatStyles(html) {
    const theme = styleThemes[state.currentStyle];
    const settings = { ...theme.styles, ...state.customSettings };

    return `
        <section style="max-width: ${settings.containerWidth}px; margin: 0 auto; padding: 20px; font-size: ${settings.fontSize}px; line-height: ${settings.lineHeight}; color: ${settings.titleColor};">
            ${html}
        </section>
    `;
}

// 降级复制方案
function fallbackCopy() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(elements.wechatPreview);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        showCopySuccess();
    } catch (err) {
        alert('复制失败,请手动选择内容复制 (Ctrl+C)');
    }

    selection.removeAllRanges();
}

// 显示复制成功提示
function showCopySuccess() {
    elements.copySuccess.classList.remove('hidden');
    setTimeout(() => {
        elements.copySuccess.classList.add('hidden');
    }, 2000);
}

// 打开设置弹窗
function openSettings() {
    const theme = styleThemes[state.currentStyle];
    const settings = { ...theme.styles, ...state.customSettings };

    // 填充当前设置值
    document.getElementById('titleColor').value = settings.titleColor;
    document.getElementById('fontSize').value = settings.fontSize;
    document.getElementById('lineHeight').value = settings.lineHeight;
    document.getElementById('paragraphSpacing').value = settings.paragraphSpacing;
    document.getElementById('quoteColor').value = settings.quoteColor;
    document.getElementById('linkColor').value = settings.linkColor;
    document.getElementById('codeBgColor').value = settings.codeBgColor;
    document.getElementById('containerWidth').value = settings.containerWidth;

    elements.settingsModal.classList.add('show');
}

// 关闭设置弹窗
function closeSettings() {
    elements.settingsModal.classList.remove('show');
}

// 应用自定义设置
function applyCustomSettings() {
    state.customSettings = {
        titleColor: document.getElementById('titleColor').value,
        fontSize: parseInt(document.getElementById('fontSize').value),
        lineHeight: parseFloat(document.getElementById('lineHeight').value),
        paragraphSpacing: parseInt(document.getElementById('paragraphSpacing').value),
        quoteColor: document.getElementById('quoteColor').value,
        linkColor: document.getElementById('linkColor').value,
        codeBgColor: document.getElementById('codeBgColor').value,
        containerWidth: parseInt(document.getElementById('containerWidth').value)
    };

    applyCurrentStyle();
    closeSettings();
}

// 重置设置
function resetSettings() {
    state.customSettings = {};
    applyCurrentStyle();
    closeSettings();
}

// 设置默认示例内容
function setDefaultContent() {
    const defaultContent = `# 欢迎使用公众号排版工具

这是一个功能强大的Markdown编辑器,专为微信公众号文章排版设计。

## 主要功能

- **实时预览**: 左侧编辑,右侧实时查看效果
- **多套样式**: 内置4种精美样式主题
- **自定义设置**: 灵活调整样式细节
- **一键复制**: 快速复制到微信编辑器

## 使用说明

1. 在左侧编辑器输入或粘贴Markdown内容
2. 在中间面板选择喜欢的样式主题
3. 点击"自定义样式"调整细节
4. 点击"复制到微信编辑器"按钮
5. 在微信公众号编辑器中粘贴 (Ctrl+V)

## 样式展示

### 引用示例

> 这是一个引用块示例,用于突出重要内容或引用他人观点。

### 代码示例

\`\`\`javascript
function hello() {
    console.log("Hello, WeChat!");
}
\`\`\`

### 列表示例

- 无序列表项1
- 无序列表项2
  - 嵌套列表项
- 无序列表项3

1. 有序列表项1
2. 有序列表项2
3. 有序列表项3

### 表格示例

| 功能 | 说明 |
|------|------|
| 实时预览 | 编辑即预览 |
| 多样式 | 4种内置主题 |
| 自定义 | 灵活调整样式 |

---

**提示**: 支持所有标准Markdown语法,包括粗体、斜体、链接、图片等!
`;

    elements.markdownInput.value = defaultContent;
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 页面加载完成后初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}