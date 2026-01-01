# 样式隔离测试指南

## 修复说明

已修复样式选择器影响整个网站的问题。现在样式设置**仅影响右侧预览区域**,不会改变网站界面本身的样式。

## 修改内容

### 1. JavaScript修改 (app.js)

**位置**: app.js:228-236

**修改前**:
```javascript
// 应用CSS变量
const root = document.documentElement;
root.style.setProperty('--primary-color', settings.quoteColor);
root.style.setProperty('--text-color', settings.titleColor);
```

**修改后**:
```javascript
// 应用样式到预览元素(不影响网站其他部分)
elements.wechatPreview.style.fontSize = `${settings.fontSize}px`;
elements.wechatPreview.style.lineHeight = settings.lineHeight;
elements.wechatPreview.style.color = settings.titleColor;
```

**改进**:
- ❌ 删除了对全局 `document.documentElement` 的样式设置
- ✅ 直接对预览元素 `wechatPreview` 设置样式
- ✅ 添加H2标题边框颜色设置 (app.js:250-254)

### 2. CSS修改 (styles.css)

**修改位置**:
- styles.css:380-384 (H2标题样式)
- styles.css:404-410 (引用块样式)

**修改前**:
```css
.wechat-preview h2 {
    border-left: 4px solid var(--primary-color);
}

.wechat-preview blockquote {
    border-left: 4px solid var(--primary-color);
}
```

**修改后**:
```css
.wechat-preview h2 {
    border-left: 4px solid #07c160;
}

.wechat-preview blockquote {
    border-left: 4px solid #07c160;
}
```

**改进**:
- ❌ 移除了对全局CSS变量 `var(--primary-color)` 的依赖
- ✅ 使用固定颜色值作为默认样式
- ✅ JavaScript可以动态覆盖这些颜色

## 测试步骤

### 测试1: 样式切换不影响网站界面

1. 打开 `index.html`
2. 观察左侧编辑器、中间控制面板的样式
3. 点击不同的样式主题(经典、商务、文艺、极简)
4. **验证**: 网站界面本身的按钮、面板、标题样式**不应该变化**
5. **验证**: 只有右侧预览区域的文章样式应该变化

### 测试2: 自定义设置不影响网站界面

1. 点击"自定义样式"按钮
2. 修改标题颜色(如改为红色)
3. 点击"应用设置"
4. **验证**: 左侧编辑器和中间面板的文字颜色**不应该变化**
5. **验证**: 只有右侧预览区域的标题颜色变为红色

### 测试3: 颜色独立设置

1. 选择"清新文艺"主题(引用颜色为黄色)
2. 在自定义设置中将引用颜色改为紫色
3. 点击"应用设置"
4. **验证**: 右侧预览中引用块的左边框和H2标题的左边框都变为紫色
5. **验证**: 网站其他紫色元素(如果有)不受影响

### 测试4: 复制功能正常

1. 输入测试内容
2. 选择任意样式主题
3. 调整自定义设置
4. 点击"复制到微信编辑器"
5. 粘贴到微信公众号编辑器
6. **验证**: 粘贴的样式与预览区域一致

## 技术原理

### 样式隔离机制

```
网站全局样式
├── :root (--primary-color: #07c160)  // 网站界面使用
├── .btn, .panel 等                    // 网站界面样式
└── .wechat-preview                   // 预览容器(独立)
    ├── 内联样式覆盖                   // JS动态设置
    └── 子元素样式                     // 仅影响内部
```

### 数据流

```
用户操作
  ↓
选择主题/自定义设置
  ↓
state.currentStyle / state.customSettings
  ↓
applyCurrentStyle()
  ↓
elements.wechatPreview.style.* (仅设置预览元素)
  ↓
预览区域更新 ✅
网站界面不变 ✅
```

## 关键改进点

1. **作用域隔离**: 所有样式设置都限定在 `.wechat-preview` 元素内
2. **内联样式优先级**: 使用 `element.style` 设置,优先级高于CSS类
3. **无全局污染**: 不再修改 `document.documentElement` 的CSS变量
4. **完整覆盖**: 添加了H2标题边框颜色的动态设置

## 预期效果

- ✅ 网站界面样式保持稳定,不受主题切换影响
- ✅ 预览区域样式可以自由切换
- ✅ 自定义设置完全作用于预览内容
- ✅ 复制到微信后样式与预览一致
