// AI Tools Data
const aiTools = [
    // AI 对话类工具
    {
        name: "ChatGPT",
        description: "OpenAI开发的大型语言模型，能够进行自然对话、回答问题、写作助手等，支持多种语言和各类文本生成任务。",
        url: "https://chat.openai.com/",
        category: "conversation",
        tags: ["对话", "文本生成", "写作", "OpenAI"]
    },
    {
        name: "Claude",
        description: "Anthropic开发的AI助手，专注于提供有帮助、无害和诚实的回答，支持长文本理解和复杂问题解析。",
        url: "https://claude.ai/",
        category: "conversation",
        tags: ["对话", "长文本", "助手", "Anthropic"]
    },
    {
        name: "文心一言",
        description: "百度推出的生成式AI产品，具有中文理解能力，可用于创作、对话和内容生成，支持多种场景应用。",
        url: "https://yiyan.baidu.com/",
        category: "conversation",
        tags: ["对话", "中文优化", "创作", "百度"]
    },
    {
        name: "讯飞星火",
        description: "科大讯飞推出的大语言模型，具备强大的中文理解和生成能力，支持知识问答、文本创作等多种功能。",
        url: "https://xinghuo.xfyun.cn/",
        category: "conversation",
        tags: ["对话", "中文优化", "认知智能", "科大讯飞"]
    },
    {
        name: "通义千问",
        description: "阿里云推出的大语言模型，注重知识性和客观性，具有广泛的知识储备和多语言支持能力。",
        url: "https://qianwen.aliyun.com/",
        category: "conversation",
        tags: ["对话", "多语言", "知识型", "阿里云"]
    },
    
    // AI 生图类工具
    {
        name: "Midjourney",
        description: "AI艺术生成工具，通过文字描述生成高质量艺术图像，支持多种艺术风格，广泛应用于创意和设计领域。",
        url: "https://www.midjourney.com/",
        category: "image",
        tags: ["艺术生成", "创意设计", "文生图", "Discord"]
    },
    {
        name: "DALL·E",
        description: "OpenAI开发的图像生成AI，能根据文本描述创建各种逼真和创意图像，支持各种风格和主题。",
        url: "https://labs.openai.com/",
        category: "image",
        tags: ["图像生成", "创意设计", "文生图", "OpenAI"]
    },
    {
        name: "Stable Diffusion",
        description: "开源的文本到图像生成模型，可根据文字描述生成详细图像，支持本地部署和在线使用。",
        url: "https://stablediffusionweb.com/",
        category: "image",
        tags: ["图像生成", "开源", "文生图", "本地部署"]
    },
    {
        name: "Adobe Firefly",
        description: "Adobe推出的创意生成AI工具，可生成图像、效果和纹理，与Adobe创意工具集成，注重商业安全使用。",
        url: "https://firefly.adobe.com/",
        category: "image",
        tags: ["图像生成", "设计工具", "创意效果", "Adobe"]
    },
    {
        name: "文心一格",
        description: "百度推出的AI艺术和创意平台，支持文生图、图生图，特别针对中文和东方美学优化。",
        url: "https://yige.baidu.com/",
        category: "image",
        tags: ["艺术生成", "中文优化", "东方风格", "百度"]
    },
    
    // AI 生视频类工具
    {
        name: "Runway",
        description: "创意视频制作平台，提供AI视频编辑和生成功能，包括文本到视频生成、背景移除、风格迁移等高级特效。",
        url: "https://runwayml.com/",
        category: "video",
        tags: ["视频生成", "视频编辑", "创意工具", "特效处理"]
    },
    {
        name: "Synthesia",
        description: "AI视频创建平台，可从文本生成逼真的讲解视频，支持多种语言和虚拟人物，适合培训和营销内容。",
        url: "https://www.synthesia.io/",
        category: "video",
        tags: ["虚拟人物", "文本转视频", "营销内容", "多语言"]
    },
    {
        name: "Fliki",
        description: "将文本转换为带有AI配音的视频，支持多种语言和声音，适合内容创作者快速生产优质视频内容。",
        url: "https://fliki.ai/",
        category: "video",
        tags: ["文本转视频", "AI配音", "内容创作", "多语言"]
    },
    {
        name: "HeyGen",
        description: "AI驱动的视频制作平台，可创建高质量的数字人物视频，支持多种语言和定制化场景，适合营销和教育。",
        url: "https://www.heygen.com/",
        category: "video",
        tags: ["数字人物", "视频生成", "营销视频", "培训内容"]
    },
    {
        name: "Pika Labs",
        description: "文本到视频的生成工具，可以根据描述创建短视频和动画，具有直观的界面和高品质的输出效果。",
        url: "https://pika.art/",
        category: "video",
        tags: ["视频生成", "文本转视频", "创意动画", "短视频"]
    },
    
    // AI 音频类工具
    {
        name: "ElevenLabs",
        description: "AI语音生成平台，创建超逼真的AI语音，支持多种语言和情感表达，适用于有声读物、配音等场景。",
        url: "https://elevenlabs.io/",
        category: "audio",
        tags: ["语音生成", "真人配音", "情感表达", "多语言"]
    },
    {
        name: "MURF AI",
        description: "AI语音生成器，提供自然的AI配音，多种语言、口音和风格选择，适用于视频配音、电子学习等。",
        url: "https://murf.ai/",
        category: "audio",
        tags: ["语音合成", "配音服务", "多语言", "文本转语音"]
    },
    {
        name: "Descript",
        description: "音频和视频编辑软件，使用AI技术简化编辑流程，包括文字编辑音频、自动转录、语音克隆等功能。",
        url: "https://www.descript.com/",
        category: "audio",
        tags: ["音频编辑", "视频编辑", "语音转文本", "播客制作"]
    },
    {
        name: "LALAL.AI",
        description: "AI驱动的音频分离工具，可从音乐中提取人声和乐器，适用于音乐制作、混音和二次创作。",
        url: "https://www.lalal.ai/",
        category: "audio",
        tags: ["音频分离", "人声提取", "音乐处理", "混音工具"]
    },
    {
        name: "Brain.fm",
        description: "AI生成的专注音乐服务，设计用于提高工作效率、放松或睡眠，基于神经科学研究开发。",
        url: "https://www.brain.fm/",
        category: "audio",
        tags: ["专注音乐", "生产力", "放松音乐", "睡眠辅助"]
    },
    
    // AI 写作类工具
    {
        name: "Jasper",
        description: "AI写作助手，生成营销文案、博客文章、电子邮件等内容，支持多种语言和写作风格，提高内容创作效率。",
        url: "https://www.jasper.ai/",
        category: "writing",
        tags: ["内容创作", "营销文案", "多语言", "写作助手"]
    },
    {
        name: "Copy.ai",
        description: "AI文案生成工具，创建各类营销文本，包括广告文案、产品描述、社交媒体内容等，简化文案写作过程。",
        url: "https://www.copy.ai/",
        category: "writing",
        tags: ["文案创作", "营销内容", "社交媒体", "邮件营销"]
    },
    {
        name: "Notion AI",
        description: "Notion集成的AI助手，帮助用户撰写、编辑、总结和翻译文本，提升工作效率和内容质量。",
        url: "https://www.notion.so/product/ai",
        category: "writing",
        tags: ["写作助手", "内容编辑", "笔记工具", "知识管理"]
    },
    {
        name: "Grammarly",
        description: "AI驱动的写作助手，检查拼写、语法错误，提供写作建议，支持多平台使用，提高文本质量和清晰度。",
        url: "https://www.grammarly.com/",
        category: "writing",
        tags: ["语法检查", "写作改进", "拼写纠正", "风格建议"]
    },
    {
        name: "写作猫",
        description: "中文AI写作助手，提供实时纠错、改写润色、智能创作等功能，帮助提升中文写作质量和效率。",
        url: "https://xiezuocat.com/",
        category: "writing",
        tags: ["中文写作", "语法检查", "文本润色", "写作辅助"]
    },
    
    // AI 编程类工具
    {
        name: "GitHub Copilot",
        description: "GitHub和OpenAI开发的AI编程助手，根据注释和代码上下文生成代码建议，支持多种编程语言，提高开发效率。",
        url: "https://github.com/features/copilot",
        category: "code",
        tags: ["代码生成", "编程助手", "自动完成", "多语言支持"]
    },
    {
        name: "Cursor",
        description: "基于OpenAI技术的代码编辑器，能够理解代码上下文并提供智能建议，支持代码生成、重构和解释。",
        url: "https://cursor.sh/",
        category: "code",
        tags: ["代码编辑器", "AI编程", "代码生成", "重构助手"]
    },
    {
        name: "Tabnine",
        description: "AI代码助手，提供代码补全功能，支持多种编程语言和IDE，通过上下文理解提高开发速度和质量。",
        url: "https://www.tabnine.com/",
        category: "code",
        tags: ["代码补全", "多语言支持", "IDE集成", "开发效率"]
    },
    {
        name: "CodeWhisperer",
        description: "Amazon开发的AI编程工具，生成代码推荐，支持多种编程语言，注重代码安全和最佳实践。",
        url: "https://aws.amazon.com/codewhisperer/",
        category: "code",
        tags: ["代码生成", "AWS集成", "安全检查", "开发助手"]
    },
    {
        name: "Replit",
        description: "在线IDE结合AI编程工具，集成代码补全和代码生成功能，支持多种编程语言，适合学习和协作开发。",
        url: "https://replit.com/",
        category: "code",
        tags: ["在线IDE", "协作开发", "代码生成", "学习平台"]
    },
    
    // AI 教育类工具
    {
        name: "Khan Academy",
        description: "结合AI技术的免费教育平台，提供个性化学习路径和内容，覆盖数学、科学、历史等多个学科领域。",
        url: "https://www.khanacademy.org/",
        category: "education",
        tags: ["个性化学习", "K12教育", "学科课程", "视频教程"]
    },
    {
        name: "Duolingo",
        description: "AI驱动的语言学习应用，根据个人学习进度调整内容，运用游戏化元素提高学习效果和参与度。",
        url: "https://www.duolingo.com/",
        category: "education",
        tags: ["语言学习", "游戏化", "个性化", "移动应用"]
    },
    {
        name: "Coursera",
        description: "在线学习平台，运用AI推荐系统提供个性化课程建议，汇集全球顶尖大学和企业的专业课程。",
        url: "https://www.coursera.org/",
        category: "education",
        tags: ["在线课程", "专业证书", "高等教育", "职业发展"]
    },
    {
        name: "Quizlet",
        description: "学习工具和平台，使用AI技术创建智能闪卡和测验，支持自定义学习内容和进度跟踪，适合各类学习场景。",
        url: "https://quizlet.com/",
        category: "education",
        tags: ["学习工具", "闪卡", "测验", "记忆训练"]
    },
    {
        name: "作业帮",
        description: "中国领先的AI教育平台，提供题目解析、智能答疑和个性化学习推荐，覆盖中小学各学科内容。",
        url: "https://www.zybang.com/",
        category: "education",
        tags: ["K12教育", "作业辅导", "智能答疑", "中文教育"]
    },
    
    // AI 效率工具
    {
        name: "Notion AI",
        description: "Notion集成的AI助手，可以帮助撰写内容、总结笔记、翻译文本等，提升知识管理和工作效率。",
        url: "https://www.notion.so/product/ai",
        category: "productivity",
        tags: ["知识管理", "笔记工具", "协作平台", "工作效率"]
    },
    {
        name: "Otter.ai",
        description: "AI语音转文字服务，实时记录会议内容，生成可搜索的笔记，支持话者识别和关键词提取。",
        url: "https://otter.ai/",
        category: "productivity",
        tags: ["会议记录", "语音转文字", "笔记工具", "远程协作"]
    },
    {
        name: "Mem",
        description: "AI驱动的笔记和知识管理工具，自动组织和连接笔记，提供智能搜索和内容推荐。",
        url: "https://mem.ai/",
        category: "productivity",
        tags: ["笔记工具", "知识管理", "智能搜索", "工作效率"]
    },
    {
        name: "Krisp",
        description: "AI降噪应用，在实时通话中消除背景噪音，提高音频质量，适用于远程会议和录音场景。",
        url: "https://krisp.ai/",
        category: "productivity",
        tags: ["降噪", "音频处理", "远程会议", "通话质量"]
    },
    {
        name: "飞书",
        description: "字节跳动推出的一站式协作平台，集成AI助手功能，支持文档协作、会议记录和工作流管理。",
        url: "https://www.feishu.cn/",
        category: "productivity",
        tags: ["协作平台", "办公套件", "工作效率", "团队协作"]
    }
];

// DOM操作函数
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const toolsContainer = document.getElementById('tools-container');
    const categoryTabs = document.getElementById('category-tabs');
    
    // 过滤并显示工具
    function filterAndDisplayTools() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        // 筛选工具
        let filteredTools = aiTools;
        
        // 基于类别过滤
        if (activeCategory !== 'all') {
            filteredTools = filteredTools.filter(tool => tool.category === activeCategory);
        }
        
        // 基于搜索词过滤
        if (searchTerm) {
            filteredTools = filteredTools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) || 
                tool.description.toLowerCase().includes(searchTerm) || 
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        // 渲染工具
        renderTools(filteredTools);
    }
    
    // 渲染工具列表
    function renderTools(tools) {
        toolsContainer.innerHTML = '';
        
        if (tools.length === 0) {
            // 显示空状态
            toolsContainer.innerHTML = `
                <div class="col-span-full empty-state">
                    <div class="empty-icon">
                        <i class="icon-search-x lucide-icon"></i>
                    </div>
                    <h3 class="empty-title">未找到匹配的工具</h3>
                    <p class="empty-message">请尝试不同的搜索词或选择其他类别</p>
                </div>
            `;
            return;
        }
        
        // 渲染工具卡片
        tools.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'tool-card';
            
            const tagsHTML = tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
            
            card.innerHTML = `
                <div class="card-content">
                    <h3 class="tool-title">${tool.name}</h3>
                    <p class="tool-description">${tool.description}</p>
                    <div class="tool-tags">${tagsHTML}</div>
                    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="visit-btn">访问网站</a>
                </div>
            `;
            
            toolsContainer.appendChild(card);
        });
    }
    
    // 添加事件监听器
    searchInput.addEventListener('input', filterAndDisplayTools);
    
    categoryTabs.addEventListener('click', function(e) {
        if (e.target.classList.contains('category-btn')) {
            // 更新激活状态
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // 重新过滤工具
            filterAndDisplayTools();
        }
    });
    
    // 初始化显示
    filterAndDisplayTools();
});
