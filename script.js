// 背景轮播功能
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// 自动轮播
setInterval(nextSlide, 6000);

// 照片轮播功能已删除，现在使用静态照片显示

// 个人照片数据
const personalPhotos = [
    { src: 'zjz.jpg', title: '证件照' }
];

// 证书数据
const certificates = [
    { src: '证书与材料/1.png', title: '专业证书' },
    { src: '证书与材料/2.png', title: '专业证书' },
    { src: '证书与材料/3.png', title: '专业证书' },
    { src: '证书与材料/4.png', title: '专业证书' },
    { src: '证书与材料/5.png', title: '专业证书' },
    { src: '证书与材料/6.png', title: '专业证书' },
    { src: '证书与材料/7.png', title: '专业证书' },
    { src: '证书与材料/8.png', title: '专业证书' },
    { src: '证书与材料/9.png', title: '专业证书' },
    { src: '证书与材料/10.png', title: '专业证书' },
    { src: '证书与材料/11.png', title: '专业证书' },
    { src: '证书与材料/12.png', title: '专业证书' },
    { src: '证书与材料/13.png', title: '专业证书' },
    { src: '证书与材料/14.png', title: '专业证书' },
    { src: '证书与材料/15.png', title: '专业证书' },
    { src: '证书与材料/16.png', title: '专业证书' },
    { src: '证书与材料/17.png', title: '专业证书' },
    { src: '证书与材料/18.png', title: '专业证书' },
    { src: '证书与材料/19.png', title: '专业证书' },
    { src: '证书与材料/EI论文.jpg', title: '学术成果' },
    { src: '证书与材料/SCI论文.jpg', title: '学术成果' },
    { src: '证书与材料/软著.jpg', title: '软件著作权' }
];

let currentCertificateIndex = 0;

let currentViewPhotoIndex = 0;

// 滚动到内容区域
function scrollToContent() {
    document.getElementById('main-content').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 打开照片模态框
function openPhotoModal(src, title) {
    const modal = document.getElementById('photoModal');
    const modalTitle = document.getElementById('photoModalTitle');
    const photoImg = document.getElementById('photoViewerImg');
    
    // 找到当前照片的索引
    currentViewPhotoIndex = personalPhotos.findIndex(photo => photo.src === src);
    
    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 设置标题和图片
    modalTitle.textContent = `个人风采 - ${title}`;
    photoImg.src = src;
    photoImg.alt = title;
}

// 关闭照片模态框
function closePhotoModal() {
    const modal = document.getElementById('photoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 上一张照片
function previousPhoto() {
    currentViewPhotoIndex = (currentViewPhotoIndex - 1 + personalPhotos.length) % personalPhotos.length;
    updatePhotoViewer();
}

// 下一张照片
function nextPhoto() {
    currentViewPhotoIndex = (currentViewPhotoIndex + 1) % personalPhotos.length;
    updatePhotoViewer();
}

// 更新照片查看器
function updatePhotoViewer() {
    const photoImg = document.getElementById('photoViewerImg');
    const modalTitle = document.getElementById('photoModalTitle');
    
    photoImg.src = personalPhotos[currentViewPhotoIndex].src;
    photoImg.alt = personalPhotos[currentViewPhotoIndex].title;
    modalTitle.textContent = `个人风采 - ${personalPhotos[currentViewPhotoIndex].title}`;
}

// 打开相册模态框
function openPhotoGallery() {
    const modal = document.getElementById('galleryModal');
    const galleryGrid = document.getElementById('galleryGrid');
    
    // 清空相册网格
    galleryGrid.innerHTML = '';
    
    // 添加所有照片到相册
    personalPhotos.forEach((photo, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${photo.src}" alt="${photo.title}" onclick="openPhotoModal('${photo.src}', '${photo.title}')">
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭相册模态框
function closeGalleryModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 证书相关功能
function openCertificateModal(src, title) {
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('certificateModalTitle');
    const certificateImg = document.getElementById('certificateViewerImg');
    
    // 找到当前证书的索引
    currentCertificateIndex = certificates.findIndex(cert => cert.src === src);
    
    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 设置标题和图片
    modalTitle.textContent = `证书详情 - ${title}`;
    certificateImg.src = src;
    certificateImg.alt = title;
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function previousCertificate() {
    currentCertificateIndex = (currentCertificateIndex - 1 + certificates.length) % certificates.length;
    updateCertificateViewer();
}

function nextCertificate() {
    currentCertificateIndex = (currentCertificateIndex + 1) % certificates.length;
    updateCertificateViewer();
}

function updateCertificateViewer() {
    const certificateImg = document.getElementById('certificateViewerImg');
    const modalTitle = document.getElementById('certificateModalTitle');
    
    certificateImg.src = certificates[currentCertificateIndex].src;
    certificateImg.alt = certificates[currentCertificateIndex].title;
    modalTitle.textContent = `证书详情 - ${certificates[currentCertificateIndex].title}`;
}

function openAllCertificates() {
    const modal = document.getElementById('galleryModal');
    const galleryGrid = document.getElementById('galleryGrid');
    
    // 清空相册网格
    galleryGrid.innerHTML = '';
    
    // 添加所有证书到相册
    certificates.forEach((certificate, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${certificate.src}" alt="${certificate.title}" onclick="openCertificateModal('${certificate.src}', '${certificate.title}')">
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 文件预览功能
function previewFile(filename, fileType) {
    const modal = document.getElementById('previewModal');
    const modalTitle = document.getElementById('modalTitle');
    const previewContent = document.getElementById('previewContent');
    
    // 显示模态框
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 设置标题
    modalTitle.textContent = `预览 - ${filename}`;
    
    // 显示加载状态
    previewContent.innerHTML = '<div class="loading"></div><p style="text-align: center; margin-top: 1rem;">正在加载文件...</p>';
    
    // 根据文件类型显示不同内容
    switch (fileType) {
        case 'pdf':
            previewPDF(filename);
            break;
        case 'video':
            previewVideo(filename);
            break;
        case 'yaml':
            previewYAML(filename);
            break;
        default:
            previewContent.innerHTML = '<p>不支持的文件类型</p>';
    }
}

// PDF预览
function previewPDF(filename) {
    const previewContent = document.getElementById('previewContent');
    
    // 创建PDF预览容器
    const pdfContainer = document.createElement('div');
    pdfContainer.style.width = '100%';
    pdfContainer.style.height = '600px';
    pdfContainer.style.border = 'none';
    pdfContainer.style.borderRadius = '12px';
    pdfContainer.style.overflow = 'hidden';
    pdfContainer.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
    
    // 创建PDF预览iframe
    const iframe = document.createElement('iframe');
    iframe.src = filename;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // 添加PDF工具栏
    const pdfToolbar = document.createElement('div');
    pdfToolbar.style.background = '#f8f9fa';
    pdfToolbar.style.padding = '1rem';
    pdfToolbar.style.borderBottom = '1px solid #e9ecef';
    pdfToolbar.style.display = 'flex';
    pdfToolbar.style.alignItems = 'center';
    pdfToolbar.style.justifyContent = 'space-between';
    
    const pdfInfo = document.createElement('div');
    pdfInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-file-pdf" style="color: #e74c3c;"></i>
            <span style="font-weight: 600; color: #2c3e50;">${filename}</span>
        </div>
    `;
    
    const pdfActions = document.createElement('div');
    pdfActions.innerHTML = `
        <button class="btn btn-secondary" onclick="downloadFile('${filename}')" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
            <i class="fas fa-download"></i> 下载
        </button>
    `;
    
    pdfToolbar.appendChild(pdfInfo);
    pdfToolbar.appendChild(pdfActions);
    
    pdfContainer.appendChild(pdfToolbar);
    pdfContainer.appendChild(iframe);
    
    // 添加错误处理
    iframe.onerror = function() {
        previewContent.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 12px;">
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                    <i class="fas fa-file-pdf" style="font-size: 4rem; color: #e74c3c; margin-bottom: 1.5rem;"></i>
                    <h3 style="color: #2c3e50; margin-bottom: 1rem;">无法预览PDF文件</h3>
                    <p style="color: #7f8c8d; margin: 1rem 0; line-height: 1.6;">您的浏览器可能不支持PDF预览，或者文件路径不正确。请尝试下载文件查看。</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                        <button class="btn btn-primary" onclick="downloadFile('${filename}')">
                            <i class="fas fa-download"></i> 下载文件
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal()">
                            <i class="fas fa-times"></i> 关闭
                        </button>
                    </div>
                </div>
            </div>
        `;
    };
    
    previewContent.innerHTML = '';
    previewContent.appendChild(pdfContainer);
}

// 视频预览
function previewVideo(filename) {
    const previewContent = document.getElementById('previewContent');
    
    // 创建视频容器
    const videoContainer = document.createElement('div');
    videoContainer.style.width = '100%';
    videoContainer.style.borderRadius = '12px';
    videoContainer.style.overflow = 'hidden';
    videoContainer.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.1)';
    videoContainer.style.background = '#000';
    
    // 创建视频工具栏
    const videoToolbar = document.createElement('div');
    videoToolbar.style.background = '#f8f9fa';
    videoToolbar.style.padding = '1rem';
    videoToolbar.style.borderBottom = '1px solid #e9ecef';
    videoToolbar.style.display = 'flex';
    videoToolbar.style.alignItems = 'center';
    videoToolbar.style.justifyContent = 'space-between';
    
    const videoInfo = document.createElement('div');
    videoInfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-video" style="color: #3498db;"></i>
            <span style="font-weight: 600; color: #2c3e50;">${filename}</span>
            <span style="background: #e3f2fd; color: #1976d2; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem;">视频</span>
        </div>
    `;
    
    const videoActions = document.createElement('div');
    videoActions.innerHTML = `
        <button class="btn btn-secondary" onclick="downloadFile('${filename}')" style="padding: 0.5rem 1rem; font-size: 0.9rem;">
            <i class="fas fa-download"></i> 下载
        </button>
    `;
    
    videoToolbar.appendChild(videoInfo);
    videoToolbar.appendChild(videoActions);
    
    // 创建视频元素
    const video = document.createElement('video');
    video.src = filename;
    video.controls = true;
    video.style.width = '100%';
    video.style.maxHeight = '500px';
    video.style.display = 'block';
    video.preload = 'metadata';
    
    // 添加视频封面
    video.poster = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMDAiIGhlaWdodD0iNTAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8Y2lyY2xlIGN4PSI1MDAiIGN5PSIyNTAiIHI9IjUwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkiLz4KPHBhdGggZD0iTTQ4MCAyMjBMMjAwIDIyMFYyODBINDgwVjIyMFoiIGZpbGw9IiM2NjdFRUEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8wXzEiIHgxPSIwIiB5MT0iMCIgeDI9IjEwMDAiIHkyPSI1MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzY2N0VFQSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3NjRCQTIiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K';
    
    // 添加错误处理
    video.onerror = function() {
        previewContent.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 12px;">
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                    <i class="fas fa-video" style="font-size: 4rem; color: #3498db; margin-bottom: 1.5rem;"></i>
                    <h3 style="color: #2c3e50; margin-bottom: 1rem;">无法播放视频文件</h3>
                    <p style="color: #7f8c8d; margin: 1rem 0; line-height: 1.6;">视频格式可能不受支持，或者文件路径不正确。请尝试下载文件查看。</p>
                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                        <button class="btn btn-primary" onclick="downloadFile('${filename}')">
                            <i class="fas fa-download"></i> 下载文件
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal()">
                            <i class="fas fa-times"></i> 关闭
                        </button>
                    </div>
                </div>
            </div>
        `;
    };
    
    videoContainer.appendChild(videoToolbar);
    videoContainer.appendChild(video);
    
    previewContent.innerHTML = '';
    previewContent.appendChild(videoContainer);
}

// YAML文件预览
function previewYAML(filename) {
    const previewContent = document.getElementById('previewContent');
    
    // 显示加载状态
    previewContent.innerHTML = '<div class="loading"></div><p style="text-align: center; margin-top: 1rem;">正在读取文件内容...</p>';
    
    // 使用fetch读取YAML文件内容
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error('文件读取失败');
            }
            return response.text();
        })
        .then(content => {
            // 创建代码预览区域
            const pre = document.createElement('pre');
            pre.textContent = content;
            pre.style.background = '#f8f9fa';
            pre.style.padding = '2rem';
            pre.style.borderRadius = '12px';
            pre.style.overflowX = 'auto';
            pre.style.fontFamily = 'Monaco, Menlo, Ubuntu Mono, monospace';
            pre.style.fontSize = '1rem';
            pre.style.lineHeight = '1.6';
            pre.style.border = '1px solid #e9ecef';
            
            previewContent.innerHTML = '';
            previewContent.appendChild(pre);
        })
        .catch(error => {
            console.error('Error reading YAML file:', error);
            previewContent.innerHTML = `
                <div style="text-align: center; padding: 3rem; background: #f8f9fa; border-radius: 12px;">
                    <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
                        <i class="fas fa-file-code" style="font-size: 4rem; color: #f39c12; margin-bottom: 1.5rem;"></i>
                        <h3 style="color: #2c3e50; margin-bottom: 1rem;">无法读取YAML文件</h3>
                        <p style="color: #7f8c8d; margin: 1rem 0; line-height: 1.6;">文件可能不存在或无法访问</p>
                        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                            <button class="btn btn-primary" onclick="downloadFile('${filename}')">
                                <i class="fas fa-download"></i> 下载文件
                            </button>
                            <button class="btn btn-secondary" onclick="closeModal()">
                                <i class="fas fa-times"></i> 关闭
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('previewModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // 清空预览内容
    const previewContent = document.getElementById('previewContent');
    previewContent.innerHTML = '';
}

// 下载文件
function downloadFile(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const previewModal = document.getElementById('previewModal');
    const photoModal = document.getElementById('photoModal');
    const galleryModal = document.getElementById('galleryModal');
    
    if (event.target === previewModal) {
        closeModal();
    } else if (event.target === photoModal) {
        closePhotoModal();
    } else if (event.target === galleryModal) {
        closeGalleryModal();
    }
}

// 键盘事件处理
document.addEventListener('keydown', function(event) {
    const previewModal = document.getElementById('previewModal');
    const photoModal = document.getElementById('photoModal');
    const galleryModal = document.getElementById('galleryModal');
    const certificateModal = document.getElementById('certificateModal');
    
    if (event.key === 'Escape') {
        if (previewModal.style.display === 'block') {
            closeModal();
        } else if (photoModal.style.display === 'block') {
            closePhotoModal();
        } else if (galleryModal.style.display === 'block') {
            closeGalleryModal();
        } else if (certificateModal.style.display === 'block') {
            closeCertificateModal();
        }
    }
    
    // 照片查看器键盘导航
    if (photoModal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            previousPhoto();
        } else if (event.key === 'ArrowRight') {
            nextPhoto();
        }
    }
    
    // 证书查看器键盘导航
    if (certificateModal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            previousCertificate();
        } else if (event.key === 'ArrowRight') {
            nextCertificate();
        }
    }
});

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加作品卡片的悬停效果
    const workCards = document.querySelectorAll('.work-card');
    
    workCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 添加按钮点击效果
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 创建涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 照片轮播已删除，现在使用静态照片显示
});

// 添加涟漪效果样式
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loading {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 4px solid rgba(102, 126, 234, 0.3);
        border-radius: 50%;
        border-top-color: #667eea;
        animation: spin 1s ease-in-out infinite;
    }
    
    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
