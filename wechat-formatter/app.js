// 应用状态管理
const state = {
    currentStyle: 'default',
    isMobilePreview: true
};

// 预定义样式主题 - 简洁优雅的设计
const styleThemes = {
    default: {
        name: '经典简约',
        description: '简洁大方,适合大多数文章',
        styles: {
            h1: {
                background: 'transparent',
                color: '#1a1a1a',
                icon: '',
                shadow: 'none',
                borderBottom: '2px solid #e8e8e8'
            },
            h2: {
                background: 'transparent',
                color: '#2c3e50',
                icon: '',
                shadow: 'none',
                borderLeft: '4px solid #3498db'
            },
            h3: {
                dotColor: '#3498db',
                dotShadow: 'none',
                color: '#34495e'
            },
            blockquote: {
                background: '#f8f9fa',
                borderColor: '#3498db',
                color: '#555',
                shadow: 'none',
                showQuote: false
            },
            listIcon: '•',
            listIconColor: '#666',
            codeInline: {
                background: '#f4f4f4',
                color: '#c7254e',
                shadow: 'none'
            },
            codeBlock: {
                background: '#282c34',
                color: '#abb2bf',
                shadow: '0 2px 8px rgba(0,0,0,0.1)'
            },
            link: {
                color: '#3498db',
                underlineColor: '#3498db'
            },
            table: {
                headerBackground: '#f8f9fa',
                headerColor: '#333',
                evenRowBg: '#fff',
                hoverBg: '#f1f1f1',
                shadow: '0 1px 3px rgba(0,0,0,0.1)'
            },
            hr: {
                background: '#e8e8e8',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '4px',
                shadow: '0 2px 8px rgba(0,0,0,0.1)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.8,
                paragraphSpacing: 16,
                containerWidth: 677
            }
        }
    },
    elegant: {
        name: '优雅商务',
        description: '专业沉稳,适合商务文章',
        styles: {
            h1: {
                background: '#2c3e50',
                color: '#fff',
                icon: '',
                shadow: '0 2px 4px rgba(0,0,0,0.1)'
            },
            h2: {
                background: 'transparent',
                color: '#2c3e50',
                icon: '',
                shadow: 'none',
                borderBottom: '1px solid #ddd'
            },
            h3: {
                dotColor: '#2c3e50',
                dotShadow: 'none',
                color: '#34495e'
            },
            blockquote: {
                background: '#fff',
                borderColor: '#95a5a6',
                color: '#7f8c8d',
                shadow: '0 1px 3px rgba(0,0,0,0.1)',
                showQuote: false
            },
            listIcon: '▪',
            listIconColor: '#7f8c8d',
            codeInline: {
                background: '#ecf0f1',
                color: '#2c3e50',
                shadow: 'none'
            },
            codeBlock: {
                background: '#2c3e50',
                color: '#ecf0f1',
                shadow: 'none'
            },
            link: {
                color: '#2980b9',
                underlineColor: '#2980b9'
            },
            table: {
                headerBackground: '#34495e',
                headerColor: '#fff',
                evenRowBg: '#f9f9f9',
                hoverBg: '#f0f0f0',
                shadow: '0 1px 3px rgba(0,0,0,0.1)'
            },
            hr: {
                background: '#bdc3c7',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '2px',
                shadow: '0 1px 4px rgba(0,0,0,0.1)'
            },
            base: {
                fontSize: 15,
                lineHeight: 1.9,
                paragraphSpacing: 18,
                containerWidth: 677
            }
        }
    },
    fresh: {
        name: '清新文艺',
        description: '柔和舒适,适合生活文章',
        styles: {
            h1: {
                background: 'transparent',
                color: '#16a085',
                icon: '',
                shadow: 'none',
                borderBottom: '3px solid #16a085'
            },
            h2: {
                background: '#e8f8f5',
                color: '#16a085',
                icon: '',
                shadow: 'none',
                borderLeft: '5px solid #16a085'
            },
            h3: {
                dotColor: '#1abc9c',
                dotShadow: 'none',
                color: '#16a085'
            },
            blockquote: {
                background: '#e8f8f5',
                borderColor: '#16a085',
                color: '#555',
                shadow: 'none',
                showQuote: false
            },
            listIcon: '◦',
            listIconColor: '#16a085',
            codeInline: {
                background: '#d5f4e6',
                color: '#0e6655',
                shadow: 'none'
            },
            codeBlock: {
                background: '#2d3e46',
                color: '#a8cec6',
                shadow: 'none'
            },
            link: {
                color: '#16a085',
                underlineColor: '#16a085'
            },
            table: {
                headerBackground: '#16a085',
                headerColor: '#fff',
                evenRowBg: '#f0fbf8',
                hoverBg: '#e0f5f0',
                shadow: '0 1px 3px rgba(0,0,0,0.1)'
            },
            hr: {
                background: '#16a085',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '6px',
                shadow: '0 2px 8px rgba(22, 160, 133, 0.15)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.8,
                paragraphSpacing: 16,
                containerWidth: 677
            }
        }
    },
    minimal: {
        name: '极简单纯',
        description: '纯粹极简,突出内容',
        styles: {
            h1: {
                background: 'transparent',
                color: '#000',
                icon: '',
                shadow: 'none'
            },
            h2: {
                background: 'transparent',
                color: '#333',
                icon: '',
                shadow: 'none'
            },
            h3: {
                dotColor: '#666',
                dotShadow: 'none',
                color: '#666'
            },
            blockquote: {
                background: '#fafafa',
                borderColor: '#ddd',
                color: '#666',
                shadow: 'none',
                showQuote: false
            },
            listIcon: '-',
            listIconColor: '#999',
            codeInline: {
                background: '#f0f0f0',
                color: '#d14',
                shadow: 'none'
            },
            codeBlock: {
                background: '#f6f6f6',
                color: '#333',
                shadow: 'none'
            },
            link: {
                color: '#0066cc',
                underlineColor: '#0066cc'
            },
            table: {
                headerBackground: '#f6f6f6',
                headerColor: '#333',
                evenRowBg: '#fff',
                hoverBg: '#fafafa',
                shadow: 'none'
            },
            hr: {
                background: '#ddd',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '0',
                shadow: 'none'
            },
            base: {
                fontSize: 15,
                lineHeight: 1.7,
                paragraphSpacing: 14,
                containerWidth: 677
            }
        }
    },
    tech: {
        name: '科技风格',
        description: '技术感强,适合技术文章',
        styles: {
            h1: {
                background: '#282c34',
                color: '#61afef',
                icon: '',
                shadow: '0 2px 8px rgba(0,0,0,0.15)'
            },
            h2: {
                background: '#21252b',
                color: '#61afef',
                icon: '',
                shadow: '0 1px 3px rgba(0,0,0,0.1)',
                borderLeft: '3px solid #61afef'
            },
            h3: {
                dotColor: '#61afef',
                dotShadow: 'none',
                color: '#61afef'
            },
            blockquote: {
                background: '#282c34',
                borderColor: '#61afef',
                color: '#abb2bf',
                shadow: '0 2px 8px rgba(0,0,0,0.2)',
                showQuote: false
            },
            listIcon: '▸',
            listIconColor: '#61afef',
            codeInline: {
                background: '#282c34',
                color: '#e5c07b',
                shadow: 'none'
            },
            codeBlock: {
                background: '#21252b',
                color: '#abb2bf',
                shadow: '0 2px 8px rgba(0,0,0,0.2)'
            },
            link: {
                color: '#61afef',
                underlineColor: '#61afef'
            },
            table: {
                headerBackground: '#282c34',
                headerColor: '#61afef',
                evenRowBg: '#2c3138',
                hoverBg: '#3e4451',
                shadow: '0 1px 3px rgba(0,0,0,0.15)'
            },
            hr: {
                background: '#3e4451',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '3px',
                shadow: '0 2px 8px rgba(0,0,0,0.2)'
            },
            base: {
                fontSize: 15,
                lineHeight: 1.8,
                paragraphSpacing: 16,
                containerWidth: 677
            }
        }
    },
    warm: {
        name: '温暖橙调',
        description: '温暖活力,适合生活文章',
        styles: {
            h1: {
                background: '#fff',
                color: '#d35400',
                icon: '',
                shadow: 'none',
                borderBottom: '3px solid #e67e22'
            },
            h2: {
                background: '#fef5e7',
                color: '#d35400',
                icon: '',
                shadow: 'none',
                borderLeft: '4px solid #e67e22'
            },
            h3: {
                dotColor: '#e67e22',
                dotShadow: 'none',
                color: '#d35400'
            },
            blockquote: {
                background: '#fef5e7',
                borderColor: '#e67e22',
                color: '#666',
                shadow: 'none',
                showQuote: false
            },
            listIcon: '●',
            listIconColor: '#e67e22',
            codeInline: {
                background: '#fef5e7',
                color: '#d35400',
                shadow: 'none'
            },
            codeBlock: {
                background: '#2d2d2d',
                color: '#f39c12',
                shadow: '0 2px 8px rgba(0,0,0,0.15)'
            },
            link: {
                color: '#d35400',
                underlineColor: '#e67e22'
            },
            table: {
                headerBackground: '#e67e22',
                headerColor: '#fff',
                evenRowBg: '#fef9f3',
                hoverBg: '#fef5e7',
                shadow: '0 1px 3px rgba(0,0,0,0.1)'
            },
            hr: {
                background: '#e67e22',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '4px',
                shadow: '0 2px 8px rgba(230, 126, 34, 0.2)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.8,
                paragraphSpacing: 16,
                containerWidth: 677
            }
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
    applyCurrentStyle();
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

    // 设置弹窗 - 暂时禁用自定义功能
    elements.settingsBtn.addEventListener('click', () => {
        alert('当前版本不支持自定义样式,请选择不同的主题!');
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
    const s = theme.styles;

    // 基础样式
    elements.wechatPreview.style.fontSize = `${s.base.fontSize}px`;
    elements.wechatPreview.style.lineHeight = s.base.lineHeight;
    elements.wechatPreview.style.maxWidth = `${s.base.containerWidth}px`;

    // H1标题
    const h1s = elements.wechatPreview.querySelectorAll('h1');
    h1s.forEach(h1 => {
        h1.style.background = s.h1.background;
        h1.style.color = s.h1.color;
        h1.style.boxShadow = s.h1.shadow;
        if (s.h1.border) {
            h1.style.border = s.h1.border;
        }
        if (s.h1.icon) {
            h1.setAttribute('data-icon', s.h1.icon);
        }
    });

    // H2标题
    const h2s = elements.wechatPreview.querySelectorAll('h2');
    h2s.forEach(h2 => {
        h2.style.background = s.h2.background;
        h2.style.color = s.h2.color;
        h2.style.boxShadow = s.h2.shadow;
        if (s.h2.borderLeft) {
            h2.style.borderLeft = s.h2.borderLeft;
        }
        if (s.h2.icon) {
            h2.setAttribute('data-icon', s.h2.icon);
        }
    });

    // H3标题
    const h3s = elements.wechatPreview.querySelectorAll('h3');
    h3s.forEach(h3 => {
        h3.style.color = s.h3.color;
        h3.style.setProperty('--h3-dot-color', s.h3.dotColor);
    });

    // 引用块
    const blockquotes = elements.wechatPreview.querySelectorAll('blockquote');
    blockquotes.forEach(bq => {
        bq.style.background = s.blockquote.background;
        bq.style.borderLeftColor = s.blockquote.borderColor;
        bq.style.color = s.blockquote.color;
        bq.style.boxShadow = s.blockquote.shadow;
        bq.setAttribute('data-show-quote', s.blockquote.showQuote);
    });

    // 列表图标
    const ulLis = elements.wechatPreview.querySelectorAll('ul li');
    ulLis.forEach(li => {
        li.setAttribute('data-icon', s.listIcon);
        li.style.color = s.listIconColor;
    });

    // 行内代码
    const inlineCodes = elements.wechatPreview.querySelectorAll('code:not(pre code)');
    inlineCodes.forEach(code => {
        code.style.background = s.codeInline.background;
        code.style.color = s.codeInline.color;
        code.style.boxShadow = s.codeInline.shadow;
    });

    // 代码块
    const pres = elements.wechatPreview.querySelectorAll('pre');
    pres.forEach(pre => {
        pre.style.background = s.codeBlock.background;
        pre.style.boxShadow = s.codeBlock.shadow;
    });
    const preCodes = elements.wechatPreview.querySelectorAll('pre code');
    preCodes.forEach(code => {
        code.style.color = s.codeBlock.color;
    });

    // 链接
    const links = elements.wechatPreview.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = s.link.color;
        link.style.setProperty('--underline-color', s.link.underlineColor);
    });

    // 表格
    const tables = elements.wechatPreview.querySelectorAll('table');
    tables.forEach(table => {
        table.style.boxShadow = s.table.shadow;
    });
    const ths = elements.wechatPreview.querySelectorAll('th');
    ths.forEach(th => {
        th.style.background = s.table.headerBackground;
        th.style.color = s.table.headerColor;
    });
    const trs = elements.wechatPreview.querySelectorAll('tr');
    trs.forEach((tr, index) => {
        if (index % 2 === 1) {
            tr.style.background = s.table.evenRowBg;
        }
    });
    // 表格悬停效果通过CSS实现

    // 分隔线
    const hrs = elements.wechatPreview.querySelectorAll('hr');
    hrs.forEach(hr => {
        hr.style.background = s.hr.background;
    });

    // 图片
    const imgs = elements.wechatPreview.querySelectorAll('img');
    imgs.forEach(img => {
        img.style.borderRadius = s.img.radius;
        img.style.boxShadow = s.img.shadow;
    });

    // 段落间距
    const paragraphs = elements.wechatPreview.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.style.marginBottom = `${s.base.paragraphSpacing}px`;
    });
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