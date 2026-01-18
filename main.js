// ========== 游戏配置参数（统一配置入口） ==========
// 这些配置可以在游戏开头统一调整

// ========== 游戏画布尺寸 ==========
const GAME_CONFIG = {
    width: 1280,   // 游戏画布宽度（像素）
    height: 720    // 游戏画布高度（像素）
};

// ========== 角色配置 ==========
const PLAYER_CONFIG = {
    width: 200,           // 角色宽度（像素）
    height: 240,          // 角色高度（像素）
    initialX: 100,       // 初始X位置
    initialYOffset: 0  // 初始Y位置偏移（从画布底部向上，GAME_HEIGHT - initialYOffset）
};

// ========== 地面配置 ==========
const GROUND_CONFIG = {
    offsetFromBottom: 100,  // 地面距离画布底部的距离（像素）
    grassHeight: 30,        // 草地高度（像素）
    grassColorTop: '#7CB342',    // 草地顶部颜色（浅绿色）
    grassColorBottom: '#558B2F', // 草地底部颜色（深绿色）
    groundColor: '#8B6F47'        // 地面颜色（土色）
    // groundY 将通过 GAME_HEIGHT - offsetFromBottom 计算
};

// ========== 平台/陷阱配置 ==========
const PLATFORM_CONFIG = {
    trapWidth: 50,   // 陷阱宽度（像素）
    trapHeight: 100,  // 陷阱高度（像素）
    collisionBoxWidth: 60,  // 碰撞盒宽度（像素，小于实际宽度，让碰撞更精确）- 从80缩小到60
    minDistanceFromTree: 400  // 与香蕉树的最小距离（像素）
};

// ========== 天空配置 ==========
const SKY_CONFIG = {
    colorTop: '#87CEEB',      // 天空顶部颜色（浅蓝色）
    colorMid: '#98D8E8',      // 天空中间颜色（稍深的蓝色）
    colorBottom: '#B0E0E6',   // 天空底部颜色（更深的蓝色）
    gradientStop1: 0,          // 渐变停止点1（顶部）
    gradientStop2: 0.6,        // 渐变停止点2（中间）
    gradientStop3: 1           // 渐变停止点3（底部）
};

// ========== 云朵配置 ==========
const CLOUD_CONFIG = {
    count: 3,                  // 云朵数量
    baseY: 80,                 // 第一个云朵的Y位置
    spacingY: 60,              // 云朵之间的Y间距
    spacingX: 400,             // 云朵之间的X间距
    parallaxSpeed: 0.1,        // 云朵视差速度（相对于相机）
    color: 'rgba(255, 255, 255, 0.6)',  // 云朵颜色（白色半透明）
    radius1: 20,               // 云朵第一部分半径
    radius2: 30,               // 云朵第二部分半径（中间最大）
    radius3: 20                // 云朵第三部分半径
};

// ========== 背景配置 ==========
// 视差滚动速度系数（相对于相机移动速度）
// 值范围：0.0 - 1.0
const PARALLAX_SPEED = {
    mid: 0.5    // 中景速度（中等，移动50%）- bg_m.png（山脉层）
};

// 背景图层坐标系配置（只保留中景层）
const BACKGROUND_CONFIG = {
    // 中景层 (bg_m.png) - 山脉层
    mid: {
        x: 0,           // X位置（正数向右，负数向左）
        y: -50,        // Y位置（正数向下，负数向上，调整此值可让山脉上下移动）
        width: null,    // 宽度（null=使用GAME_WIDTH，或指定像素值）
        height: null    // 高度（null=使用GAME_HEIGHT，或指定像素值）
    }
};

// ========== 香蕉树配置 ==========
const TREE_CONFIG = {
    width: 200,                     // 香蕉树宽度（像素）
    height: 300,                    // 香蕉树高度（像素）
    collisionBoxWidth: 50,         // 碰撞盒宽度（像素，小于实际宽度，让碰撞更精确）
    spacing: 400,                   // 生成间距（像素）- 默认值，会被关卡覆盖
    generationProbability: 0.7,     // 生成概率（70%）- 默认值，会被关卡覆盖
    minDistanceFromTrap: 400,       // 与陷阱的最小距离（通用最小值）- 从250增加到400
    minDistanceFromTrapFirstLevel: 500  // 第一关专用最小值（更安全）- 从350增加到500
};

// ========== 猴子配置 ==========
// 目标猴子（要抓的猴子）配置
const TARGET_MONKEY_CONFIG = {
    width: 150,          // 目标猴子宽度（像素）
    height: 240,         // 目标猴子高度（像素）
    initialX: 500,      // 初始X位置
    initialYOffset: 200, // 初始Y位置偏移（与玩家相同）
    baseSpeed: 4,       // 基础移动速度
    jumpPower: -15,     // 跳跃力度
    gravity: 0.8,       // 重力
    color: '#f39c12'    // 颜色（橙色）
};

// 普通猴子（阻碍）配置
const NORMAL_MONKEY_CONFIG = {
    width: 150,              // 普通猴子宽度（像素）
    height: 240,             // 普通猴子高度（像素）
    color: '#95a5a6',       // 颜色（灰色，与目标猴子的橙色不同）
    speedX: 0,              // 移动速度（静止不动）
    minDistanceFromTrap: 80, // 与陷阱的最小距离
    minDistanceFromTree: 100  // 与香蕉树的最小距离
};

// 导出配置（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        GAME_CONFIG,
        PLAYER_CONFIG,
        GROUND_CONFIG,
        SKY_CONFIG,
        CLOUD_CONFIG,
        PLATFORM_CONFIG,
        PARALLAX_SPEED,
        BACKGROUND_CONFIG,
        TREE_CONFIG,
        TARGET_MONKEY_CONFIG,
        NORMAL_MONKEY_CONFIG
    };
}
