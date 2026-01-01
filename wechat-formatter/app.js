// 应用状态管理
const state = {
    currentStyle: 'default',
    isMobilePreview: true
};

// 预定义样式主题 - 每个主题独特的视觉风格
const styleThemes = {
    default: {
        name: '🎨 梦幻渐变',
        description: '现代渐变风格,视觉冲击力强',
        styles: {
            h1: {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: '#ffffff',
                icon: '✨',
                shadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
            },
            h2: {
                background: 'linear-gradient(to right, #f093fb 0%, #f5576c 100%)',
                color: '#ffffff',
                icon: '📌',
                shadow: '0 3px 10px rgba(245, 87, 108, 0.2)'
            },
            h3: {
                dotColor: '#667eea',
                dotShadow: '0 0 0 3px rgba(102, 126, 234, 0.2)',
                color: '#2c3e50'
            },
            blockquote: {
                background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
                borderColor: '#f39c12',
                color: '#2d3436',
                shadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
                showQuote: true
            },
            listIcon: '▸',
            listIconColor: '#667eea',
            codeInline: {
                background: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)',
                color: '#2d3436',
                shadow: '0 2px 5px rgba(0, 0, 0, 0.05)'
            },
            codeBlock: {
                background: 'linear-gradient(135deg, #2d3436 0%, #000000 100%)',
                color: '#dfe6e9',
                shadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            },
            link: {
                color: '#0984e3',
                underlineColor: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)'
            },
            table: {
                headerBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                headerColor: '#ffffff',
                evenRowBg: '#f8f9fa',
                hoverBg: '#e9ecef',
                shadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            },
            hr: {
                background: 'linear-gradient(to right, transparent, #667eea, transparent)',
                icon: '✦',
                iconColor: '#667eea'
            },
            img: {
                radius: '8px',
                shadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.8,
                paragraphSpacing: 20,
                containerWidth: 677
            }
        }
    },
    elegant: {
        name: '💼 商务专业',
        description: '沉稳大气,适合商务文章',
        styles: {
            h1: {
                background: '#2c3e50',
                color: '#ffffff',
                icon: '',
                shadow: '0 2px 8px rgba(44, 62, 80, 0.3)'
            },
            h2: {
                background: '#34495e',
                color: '#ffffff',
                icon: '▸',
                shadow: '0 2px 6px rgba(52, 73, 94, 0.2)'
            },
            h3: {
                dotColor: '#2c3e50',
                dotShadow: 'none',
                color: '#2c3e50'
            },
            blockquote: {
                background: '#ecf0f1',
                borderColor: '#34495e',
                color: '#2c3e50',
                shadow: 'none',
                showQuote: false
            },
            listIcon: '●',
            listIconColor: '#2c3e50',
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
                headerBackground: '#2c3e50',
                headerColor: '#ffffff',
                evenRowBg: '#f8f9fa',
                hoverBg: '#e9ecef',
                shadow: 'none'
            },
            hr: {
                background: '#bdc3c7',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '4px',
                shadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            },
            base: {
                fontSize: 16,
                lineHeight: 2,
                paragraphSpacing: 25,
                containerWidth: 677
            }
        }
    },
    fresh: {
        name: '🌸 清新可爱',
        description: '柔和粉彩,适合生活情感',
        styles: {
            h1: {
                background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
                color: '#ffffff',
                icon: '🌸',
                shadow: '0 4px 15px rgba(253, 121, 168, 0.3)'
            },
            h2: {
                background: 'linear-gradient(to right, #fdcb6e 0%, #f39c12 100%)',
                color: '#ffffff',
                icon: '💫',
                shadow: '0 3px 10px rgba(243, 156, 18, 0.2)'
            },
            h3: {
                dotColor: '#fd79a8',
                dotShadow: '0 0 0 3px rgba(253, 121, 168, 0.2)',
                color: '#e84393'
            },
            blockquote: {
                background: 'linear-gradient(135deg, #fff0f6 0%, #fd79a8 30%)',
                borderColor: '#fd79a8',
                color: '#2d3436',
                shadow: '0 3px 10px rgba(253, 121, 168, 0.15)',
                showQuote: false
            },
            listIcon: '♡',
            listIconColor: '#fd79a8',
            codeInline: {
                background: '#fff0f6',
                color: '#e84393',
                shadow: 'none'
            },
            codeBlock: {
                background: '#ffeaa7',
                color: '#2d3436',
                shadow: 'none'
            },
            link: {
                color: '#e84393',
                underlineColor: '#fd79a8'
            },
            table: {
                headerBackground: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
                headerColor: '#ffffff',
                evenRowBg: '#fff5f8',
                hoverBg: '#ffe0eb',
                shadow: '0 4px 15px rgba(253, 121, 168, 0.15)'
            },
            hr: {
                background: 'linear-gradient(to right, transparent, #fd79a8, transparent)',
                icon: '♥',
                iconColor: '#fd79a8'
            },
            img: {
                radius: '12px',
                shadow: '0 4px 15px rgba(253, 121, 168, 0.2)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.75,
                paragraphSpacing: 22,
                containerWidth: 677
            }
        }
    },
    minimal: {
        name: '⚪ 极简单纯',
        description: '黑白灰调,突出内容',
        styles: {
            h1: {
                background: '#ffffff',
                color: '#2d3436',
                icon: '',
                shadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                border: '2px solid #2d3436'
            },
            h2: {
                background: '#ffffff',
                color: '#2d3436',
                icon: '',
                shadow: 'none',
                borderLeft: '4px solid #2d3436'
            },
            h3: {
                dotColor: '#2d3436',
                dotShadow: 'none',
                color: '#2d3436'
            },
            blockquote: {
                background: '#ffffff',
                borderColor: '#636e72',
                color: '#2d3436',
                shadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                showQuote: false
            },
            listIcon: '—',
            listIconColor: '#636e72',
            codeInline: {
                background: '#dfe6e9',
                color: '#2d3436',
                shadow: 'none'
            },
            codeBlock: {
                background: '#2d3436',
                color: '#dfe6e9',
                shadow: 'none'
            },
            link: {
                color: '#2d3436',
                underlineColor: '#636e72'
            },
            table: {
                headerBackground: '#2d3436',
                headerColor: '#ffffff',
                evenRowBg: '#ffffff',
                hoverBg: '#f5f6fa',
                shadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            },
            hr: {
                background: '#dfe6e9',
                icon: '',
                iconColor: ''
            },
            img: {
                radius: '0',
                shadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            },
            base: {
                fontSize: 15,
                lineHeight: 1.6,
                paragraphSpacing: 15,
                containerWidth: 677
            }
        }
    },
    tech: {
        name: '💻 科技蓝调',
        description: '科技感十足,技术文章首选',
        styles: {
            h1: {
                background: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
                color: '#ffffff',
                icon: '</>',
                shadow: '0 4px 15px rgba(9, 132, 227, 0.3)'
            },
            h2: {
                background: 'linear-gradient(to right, #00cec9 0%, #0984e3 100%)',
                color: '#ffffff',
                icon: '#',
                shadow: '0 3px 10px rgba(9, 132, 227, 0.2)'
            },
            h3: {
                dotColor: '#0984e3',
                dotShadow: '0 0 0 3px rgba(9, 132, 227, 0.2)',
                color: '#0984e3'
            },
            blockquote: {
                background: 'linear-gradient(135deg, #dfe6e9 0%, #74b9ff 50%)',
                borderColor: '#0984e3',
                color: '#2d3436',
                shadow: '0 3px 10px rgba(9, 132, 227, 0.15)',
                showQuote: false
            },
            listIcon: '▪',
            listIconColor: '#0984e3',
            codeInline: {
                background: '#dfe6e9',
                color: '#0984e3',
                shadow: 'none'
            },
            codeBlock: {
                background: '#2d3436',
                color: '#74b9ff',
                shadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
            },
            link: {
                color: '#0984e3',
                underlineColor: '#74b9ff'
            },
            table: {
                headerBackground: 'linear-gradient(135deg, #0984e3 0%, #74b9ff 100%)',
                headerColor: '#ffffff',
                evenRowBg: '#f0f8ff',
                hoverBg: '#e3f2fd',
                shadow: '0 4px 15px rgba(9, 132, 227, 0.15)'
            },
            hr: {
                background: 'linear-gradient(to right, transparent, #0984e3, transparent)',
                icon: '[+]',
                iconColor: '#0984e3'
            },
            img: {
                radius: '6px',
                shadow: '0 4px 15px rgba(9, 132, 227, 0.2)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.8,
                paragraphSpacing: 20,
                containerWidth: 677
            }
        }
    },
    warm: {
        name: '🍁 温暖秋日',
        description: '暖色系,给人温馨感觉',
        styles: {
            h1: {
                background: 'linear-gradient(135deg, #e17055 0%, #d63031 100%)',
                color: '#ffffff',
                icon: '🍂',
                shadow: '0 4px 15px rgba(214, 48, 49, 0.3)'
            },
            h2: {
                background: 'linear-gradient(to right, #f39c12 0%, #e67e22 100%)',
                color: '#ffffff',
                icon: '🍁',
                shadow: '0 3px 10px rgba(230, 126, 34, 0.2)'
            },
            h3: {
                dotColor: '#e67e22',
                dotShadow: '0 0 0 3px rgba(230, 126, 34, 0.2)',
                color: '#d35400'
            },
            blockquote: {
                background: 'linear-gradient(135deg, #ffeaa7 0%, #f39c12 100%)',
                borderColor: '#e67e22',
                color: '#2d3436',
                shadow: '0 3px 10px rgba(230, 126, 34, 0.15)',
                showQuote: false
            },
            listIcon: '◦',
            listIconColor: '#e67e22',
            codeInline: {
                background: '#ffeaa7',
                color: '#d35400',
                shadow: 'none'
            },
            codeBlock: {
                background: '#2d3436',
                color: '#ffeaa7',
                shadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            },
            link: {
                color: '#d35400',
                underlineColor: '#e67e22'
            },
            table: {
                headerBackground: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
                headerColor: '#ffffff',
                evenRowBg: '#fff5e6',
                hoverBg: '#ffe8cc',
                shadow: '0 4px 15px rgba(230, 126, 34, 0.15)'
            },
            hr: {
                background: 'linear-gradient(to right, transparent, #e67e22, transparent)',
                icon: '⌘',
                iconColor: '#e67e22'
            },
            img: {
                radius: '8px',
                shadow: '0 4px 15px rgba(230, 126, 34, 0.2)'
            },
            base: {
                fontSize: 16,
                lineHeight: 1.8,
                paragraphSpacing: 22,
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
        h3.setAttribute('data-dot-color', s.h3.dotColor);
        h3.setAttribute('data-dot-shadow', s.h3.dotShadow);
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
        hr.setAttribute('data-icon', s.hr.icon);
        hr.setAttribute('data-icon-color', s.hr.iconColor);
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