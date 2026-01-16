// Form validation functions for EmailJS integration
// Email validation is now handled by validateEmailFormat() function

// ==================== BILINGUAL SUPPORT (EN/VI) ====================
// Translation objects
const translations = {
  en: {
    hero: {
      title: 'Ratraco International Transport Center',
      subtitle: 'Fast - Safe - Green - Efficient Transport'
    },
    table: {
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      zalo: 'Zalo',
      zaloLink: 'Zalo Link'
    },
    form: {
      title: 'Contact Us',
      description: 'Fill out the form below and we\'ll get back to you as soon as possible.',
      name: 'Name:',
      namePlaceholder: 'Enter your full name',
      company: 'Company:',
      companyPlaceholder: 'Enter your company name',
      email: 'Email:',
      emailPlaceholder: 'Enter your email address',
      emailTitle: 'Please enter a valid email address',
      phone: 'Phone:',
      phonePlaceholder: 'Enter your phone number',
      phoneTitle: 'Please enter a valid phone number (minimum 10 digits)',
      polPod: 'POL/POD:',
      polPodPlaceholder: 'Port of Loading / Port of Discharge',
      commodity: 'Commodity Description (HS CODE):',
      commodityPlaceholder: 'Describe your commodity and include HS code if available',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      completeVerification: 'Complete verification in popup'
    },
    validation: {
      nameEmpty: 'Name cannot be empty.',
      companyEmpty: 'Company cannot be empty.',
      emailEmpty: 'Email cannot be empty.',
      phoneEmpty: 'Phone cannot be empty.',
      polPodEmpty: 'POL/POD cannot be empty.',
      commodityEmpty: 'Commodity Description (HS CODE) cannot be empty.',
      emailInvalid: 'Please enter a valid email address. Examples: user@example.com, john.doe@company.co.uk',
      phoneInvalid: 'Please enter a valid phone number. Examples: +84123456789, 0123456789, (012) 345-6789'
    },
    messages: {
      success: 'Thank you! Your inquiry has been submitted successfully. We will get back to you soon.',
      error: 'Sorry, there was an error submitting your inquiry. Please try again or contact us directly.',
      errorDetails: 'Sorry, there was an error submitting your inquiry.\n\nError: {error}\n\nPlease check the browser console for more details or contact us directly.'
    },
    recaptcha: {
      title: 'Security Verification'
    },
    footer: {
      address: '4th floor, 118 Le Duan Street, Van Mieu - Quoc Tu Giam Ward, Hanoi, Vietnam.',
      webmail: 'Webmail',
      contact: 'Contact',
      copyright: '2015 Ratraco. All rights reserved.'
    }
  },
  vi: {
    hero: {
      title: 'Trung Tâm Vận Tải Quốc Tế Ratraco',
      subtitle: 'Vận Tải Nhanh - An Toàn - Xanh - Hiệu Quả'
    },
    table: {
      name: 'Tên',
      phone: 'Điện thoại',
      email: 'Email',
      zalo: 'Zalo',
      zaloLink: 'Liên kết Zalo'
    },
    form: {
      title: 'Liên Hệ',
      description: 'Điền vào biểu mẫu bên dưới và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.',
      name: 'Tên:',
      namePlaceholder: 'Nhập họ và tên của bạn',
      company: 'Công ty:',
      companyPlaceholder: 'Nhập tên công ty của bạn',
      email: 'Email:',
      emailPlaceholder: 'Nhập địa chỉ email của bạn',
      emailTitle: 'Vui lòng nhập địa chỉ email hợp lệ',
      phone: 'Điện thoại:',
      phonePlaceholder: 'Nhập số điện thoại của bạn',
      phoneTitle: 'Vui lòng nhập số điện thoại hợp lệ (tối thiểu 10 chữ số)',
      polPod: 'POL/POD:',
      polPodPlaceholder: 'Cảng Xếp Hàng / Cảng Dỡ Hàng',
      commodity: 'Mô Tả Hàng Hóa (Mã HS):',
      commodityPlaceholder: 'Mô tả hàng hóa của bạn và bao gồm mã HS nếu có',
      submit: 'Gửi Yêu Cầu',
      submitting: 'Đang gửi...',
      completeVerification: 'Hoàn tất xác minh trong cửa sổ popup'
    },
    validation: {
      nameEmpty: 'Tên không được để trống.',
      companyEmpty: 'Công ty không được để trống.',
      emailEmpty: 'Email không được để trống.',
      phoneEmpty: 'Điện thoại không được để trống.',
      polPodEmpty: 'POL/POD không được để trống.',
      commodityEmpty: 'Mô Tả Hàng Hóa (Mã HS) không được để trống.',
      emailInvalid: 'Vui lòng nhập địa chỉ email hợp lệ. Ví dụ: user@example.com, john.doe@company.co.uk',
      phoneInvalid: 'Vui lòng nhập số điện thoại hợp lệ. Ví dụ: +84123456789, 0123456789, (012) 345-6789'
    },
    messages: {
      success: 'Cảm ơn bạn! Yêu cầu của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.',
      error: 'Xin lỗi, đã có lỗi xảy ra khi gửi yêu cầu của bạn. Vui lòng thử lại hoặc liên hệ trực tiếp với chúng tôi.',
      errorDetails: 'Xin lỗi, đã có lỗi xảy ra khi gửi yêu cầu của bạn.\n\nLỗi: {error}\n\nVui lòng kiểm tra bảng điều khiển trình duyệt để biết thêm chi tiết hoặc liên hệ trực tiếp với chúng tôi.'
    },
    recaptcha: {
      title: 'Xác Minh Bảo Mật'
    },
    footer: {
      address: 'Số 118 Lê Duẩn, Phường Văn Miếu - Quốc Tử Giám, TP. Hà Nội, Việt Nam.',
      webmail: 'Webmail',
      contact: 'Liên Hệ',
      copyright: '2015 Ratraco. All rights reserved.'
    }
  }
};

// Current language (default: English)
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Function to get nested translation value
function getTranslation(key, lang = currentLang) {
  const keys = key.split('.');
  let value = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

// Function to translate the page
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getTranslation(key, lang);
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      // For input/textarea, update placeholder if it has data-i18n-placeholder
      const placeholderKey = element.getAttribute('data-i18n-placeholder');
      if (placeholderKey) {
        element.placeholder = getTranslation(placeholderKey, lang);
      }
      // Update title attribute if it has data-i18n-title
      const titleKey = element.getAttribute('data-i18n-title');
      if (titleKey) {
        element.title = getTranslation(titleKey, lang);
      }
    } else {
      // For other elements, update text content but preserve HTML structure
      if (element.innerHTML.includes('<span') || element.innerHTML.includes('*')) {
        // Preserve required asterisk
        const requiredSpan = element.querySelector('.required');
        element.innerHTML = translation;
        if (requiredSpan) {
          element.appendChild(requiredSpan);
        }
      } else {
        element.textContent = translation;
      }
    }
  });

  // Update language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  translatePage(currentLang);

  // Add click handlers to language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      translatePage(lang);
      // Reload page after language change
      window.location.reload();
    });
  });
});
// ==================== END BILINGUAL SUPPORT ====================

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_8iag83p';
const EMAILJS_TEMPLATE_ID = 'template_dpwukoo';
const EMAILJS_PUBLIC_KEY = 'Is-jFEIBaCUFwfQm1';

// Enhanced phone validation function
function validatePhoneNumber(phoneValue) {
  // Remove all spaces, hyphens, parentheses for validation
  var cleanPhone = phoneValue.replace(/[\s\-\(\)]/g, '');
  
  // Check if it starts with + (international format)
  var hasCountryCode = cleanPhone.startsWith('+');
  
  if (hasCountryCode) {
    // International format: +XX followed by 8-15 digits
    var phoneRegex = /^\+[1-9]\d{8,14}$/;
    return phoneRegex.test(cleanPhone);
  } else {
    // Local format: 10-15 digits
    var phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(cleanPhone);
  }
}

// Enhanced email validation function
function validateEmailFormat(emailValue) {
  // More comprehensive email validation
  var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  // Check basic format
  if (!emailRegex.test(emailValue.toLowerCase())) {
    return false;
  }
  
  // Additional checks
  var parts = emailValue.split('@');
  if (parts.length !== 2) return false;
  
  var localPart = parts[0];
  var domainPart = parts[1];
  
  // Check local part length (before @)
  if (localPart.length > 64) return false;
  
  // Check domain part length (after @)
  if (domainPart.length > 253) return false;
  
  // Check for consecutive dots
  if (emailValue.includes('..')) return false;
  
  // Check if starts or ends with dot
  if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
  
  return true;
}

function validateContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return false;

  // Required fields mapping with translation keys
  const requiredFields = [
    { name: 'user_name', key: 'validation.nameEmpty' },
    { name: 'user_company', key: 'validation.companyEmpty' },
    { name: 'user_email', key: 'validation.emailEmpty' },
    { name: 'user_phone', key: 'validation.phoneEmpty' },
    { name: 'pol_pod', key: 'validation.polPodEmpty' },
    { name: 'commodity_description', key: 'validation.commodityEmpty' }
  ];
  
  // Check all required fields
  for (var i = 0; i < requiredFields.length; i++) {
    var fieldObj = form[requiredFields[i].name];
    if (fieldObj && fieldObj.value.trim().length == 0) {
      alert(getTranslation(requiredFields[i].key));
      fieldObj.focus();
      return false;
    }
  }
  
  // Enhanced email validation
  var emailField = form['user_email'];
  if (emailField && emailField.value.trim().length > 0) {
    if (!validateEmailFormat(emailField.value.trim())) {
      alert(getTranslation('validation.emailInvalid'));
      emailField.focus();
      return false;
    }
  }
  
  // Enhanced phone validation
  var phoneField = form['user_phone'];
  if (phoneField && phoneField.value.trim().length > 0) {
    if (!validatePhoneNumber(phoneField.value.trim())) {
      alert(getTranslation('validation.phoneInvalid'));
      phoneField.focus();
      return false;
    }
  }
  
  return true;
}

// Initialize EmailJS and form
document.addEventListener('DOMContentLoaded', function() {
  // Wait for EmailJS to load, then initialize
  function initializeEmailJS() {
    if (typeof emailjs !== 'undefined' && emailjs.init) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('EmailJS initialization error:', error);
      }
    } else {
      // Retry after a short delay if EmailJS hasn't loaded yet
      setTimeout(initializeEmailJS, 100);
    }
  }
  
  // Start initialization
  initializeEmailJS();
  
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  // Check if we just returned from a form submission
  checkAndClearAfterSubmission();
  
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  const phoneField = form.querySelector('input[type="tel"]');
  
  // Add input formatting for phone field (without validation messages)
  if (phoneField) {
    phoneField.addEventListener('input', function() {
      formatPhoneInput(this);
    });
  }
  
  // Remove real-time validation - only validate on form submission
});

function formatPhoneInput(field) {
  let value = field.value.replace(/\D/g, ''); // Remove non-digits
  
  // Don't format if it starts with + (international)
  if (field.value.startsWith('+')) {
    return;
  }
  
  // Format Vietnamese phone numbers
  if (value.length >= 10) {
    if (value.startsWith('0')) {
      // Format: 0XXX XXX XXX
      value = value.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    }
  }
  
  // Update field value without triggering infinite loop
  if (field.value !== value && !field.value.startsWith('+')) {
    field.value = value;
  }
}

function validatePhoneField(field) {
  const value = field.value.trim();
  
  // Clear previous error
  clearPhoneError(field);
  
  if (!value) {
    showPhoneError(field, 'Phone number is required');
    return false;
  }
  
  if (!validatePhoneNumber(value)) {
    showPhoneError(field, 'Please enter a valid phone number. Examples: +84123456789, 0123456789');
    return false;
  }
  
  return true;
}

function showPhoneError(field, message) {
  // Remove existing error message
  const existingError = field.parentNode.querySelector('.phone-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Don't show visual error message - validation happens silently
  // The browser's built-in validation or form submission validation will handle user feedback
}

function clearPhoneError(field) {
  const errorDiv = field.parentNode.querySelector('.phone-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

function validateField(field) {
  const value = field.value.trim();
  
  // Clear previous error
  clearFieldError(field);
  
  if (!value) {
    showFieldError(field, 'This field is required');
    return false;
  }
  
  // Email validation
  if (field.type === 'email' || field.getAttribute('ftype') === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Please enter a valid email address');
      return false;
    }
  }
  
  return true;
}

function showFieldError(field, message) {
  // Remove existing error message
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Don't show visual error message - validation happens silently
  // The browser's built-in validation or form submission validation will handle user feedback
}

function clearFieldError(field) {
  const errorDiv = field.parentNode.querySelector('.field-error');
  if (errorDiv) {
    errorDiv.remove();
  }
}

// Smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', function() {
  // Add smooth scrolling to all anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const menu = document.querySelector('.mobile-menu');
  if (menu) {
    menu.classList.toggle('active');
  }
}

// Lazy loading for images (if added in future)
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Handle browser back/forward navigation - clear form when returning to page
window.addEventListener('pageshow', function(event) {
  // This event fires when navigating back to the page
  if (event.persisted) {
    // Page was loaded from cache (back/forward navigation)
    checkAndClearAfterSubmission();
  }
});

// Global variable to track reCAPTCHA state
let recaptchaCompleted = false;
// Set to false to disable reCAPTCHA requirement (useful for testing or if domain is not configured)
let recaptchaEnabled = false; // Currently disabled due to domain configuration issue

// Function to show reCAPTCHA modal
function showRecaptchaModal() {
  const modal = document.getElementById('recaptcha-modal');
  if (modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

// Function to close reCAPTCHA modal
function closeRecaptchaModal() {
  const modal = document.getElementById('recaptcha-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
  
  // Reset submit button
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.textContent = getTranslation('form.submit');
    submitBtn.disabled = false;
  }
}

// Function to check if we returned from form submission and clear form
function checkAndClearAfterSubmission() {
  
  // Check if we have a flag indicating form was submitted
  const formSubmitted = localStorage.getItem('contactFormSubmitted');
  const lastSubmissionTime = localStorage.getItem('contactFormSubmissionTime');
  
  // Check multiple indicators of form submission return
  const hasSubmissionFlag = formSubmitted === 'true';
  const hasRecentSubmission = lastSubmissionTime && (Date.now() - parseInt(lastSubmissionTime)) < 60000; // 1 minute
  
  // Additional checks for Live Server compatibility
  const sessionSubmitted = sessionStorage.getItem('contactFormSubmitted') === 'true';
  const urlHasSubmissionHint = window.location.href.includes('#submitted') || window.location.search.includes('submitted');
  

  if (hasSubmissionFlag || sessionSubmitted || hasRecentSubmission || urlHasSubmissionHint) {

    clearFormAfterSubmission();
    
    // Clear all the flags
    localStorage.removeItem('contactFormSubmitted');
    localStorage.removeItem('contactFormSubmissionTime');
    sessionStorage.removeItem('contactFormSubmitted');
    
    // Clean URL if it has submission hints
    if (urlHasSubmissionHint) {
      const cleanUrl = window.location.href.replace(/#submitted.*$/, '').replace(/[?&]submitted[^&]*/, '');
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }
}

// Function to mark form as submitted
function markFormAsSubmitted() {
  const timestamp = Date.now().toString();
  
  // Use both localStorage and sessionStorage for better compatibility
  localStorage.setItem('contactFormSubmitted', 'true');
  localStorage.setItem('contactFormSubmissionTime', timestamp);
  sessionStorage.setItem('contactFormSubmitted', 'true');
  sessionStorage.setItem('contactFormSubmissionTime', timestamp);
  

}

// Function to clear form after successful submission
function clearFormAfterSubmission() {
  const form = document.getElementById('contact-form');
  if (form) {
    // Reset all form fields
    form.reset();
    
    // Reset submit button state
    const submitBtn = form.querySelector('button[type=submit]');
    if (submitBtn) {
      submitBtn.textContent = getTranslation('form.submit');
      submitBtn.disabled = false;
    }
    
    // Reset reCAPTCHA state
    recaptchaCompleted = false;
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.reset();
    }
    
  }
}

// Function to send email via EmailJS
async function sendEmailViaEmailJS(formData) {
  try {
    // Check if Public Key is configured
    if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' || !EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY.trim() === '') {
      throw new Error('EmailJS Public Key is not configured. Please update EMAILJS_PUBLIC_KEY in script.js with your Public Key from https://dashboard.emailjs.com/admin/account');
    }

    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
      throw new Error('EmailJS library is not loaded. Please check if the script is included in your HTML.');
    }

    // Ensure EmailJS is initialized
    if (!emailjs.init) {
      throw new Error('EmailJS initialization failed. Please check your public key.');
    }

    // Initialize EmailJS if not already initialized
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (initError) {
      // If already initialized, this is fine
      if (!initError.message.includes('already')) {
        console.warn('EmailJS init warning:', initError);
      }
    }

    // Prepare template parameters
    const templateParams = {
      user_name: formData.user_name,
      user_company: formData.user_company,
      user_email: formData.user_email,
      user_phone: formData.user_phone,
      pol_pod: formData.pol_pod,
      commodity_description: formData.commodity_description,
      date: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    // Add reCAPTCHA response if available
    if (typeof grecaptcha !== 'undefined') {
      const recaptchaResponse = grecaptcha.getResponse();
      if (recaptchaResponse) {
        templateParams['g-recaptcha-response'] = recaptchaResponse;
      }
    }

    console.log('Sending email with EmailJS:', {
      service: EMAILJS_SERVICE_ID,
      template: EMAILJS_TEMPLATE_ID,
      params: templateParams
    });

    // Send email via EmailJS (using the correct API format)
    // EmailJS v4 uses: emailjs.send(serviceId, templateId, templateParams, publicKey)
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS response:', response);
    return { success: true, response: response };
  } catch (error) {
    console.error('EmailJS error details:', {
      message: error.text || error.message || 'Unknown error',
      status: error.status || 'N/A',
      fullError: error
    });
    return { 
      success: false, 
      error: error,
      errorMessage: error.text || error.message || 'Failed to send email. Please check your EmailJS configuration.'
    };
  }
}

// Callback function when reCAPTCHA is completed
function onRecaptchaSuccess() {
  recaptchaCompleted = true;
  
  // Close modal
  closeRecaptchaModal();
  
  // Auto-submit the form after reCAPTCHA is completed
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.textContent = getTranslation('form.submitting');
    submitBtn.disabled = true;
  }
  
  // Submit the form via EmailJS
  submitFormViaEmailJS();
}

// Function to submit form via EmailJS
async function submitFormViaEmailJS() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Get form data
  const formData = {
    user_name: form.user_name.value.trim(),
    user_company: form.user_company.value.trim(),
    user_email: form.user_email.value.trim(),
    user_phone: form.user_phone.value.trim(),
    pol_pod: form.pol_pod.value.trim(),
    commodity_description: form.commodity_description.value.trim()
  };

  // Send email via EmailJS
  const result = await sendEmailViaEmailJS(formData);

  const submitBtn = form.querySelector('button[type=submit]');
  
  if (result.success) {
    // Success - show message and clear form
    alert(getTranslation('messages.success'));
    markFormAsSubmitted();
    clearFormAfterSubmission();
    
    if (submitBtn) {
      submitBtn.textContent = getTranslation('form.submit');
      submitBtn.disabled = false;
    }
    
    // Reset reCAPTCHA
    recaptchaCompleted = false;
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.reset();
    }
  } else {
    // Error - show detailed error message
    const errorMsg = result.errorMessage || 
                     (result.error && result.error.text) || 
                     (result.error && result.error.message) || 
                     'Unknown error occurred';
    
    console.error('Form submission error:', result.error);
    
    // Show user-friendly error message with translation
    const errorMessage = getTranslation('messages.errorDetails').replace('{error}', errorMsg);
    alert(errorMessage);
    
    if (submitBtn) {
      submitBtn.textContent = getTranslation('form.submit');
      submitBtn.disabled = false;
    }
    
    // Reset reCAPTCHA so user can try again
    recaptchaCompleted = false;
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.reset();
    }
  }
}

// Form submission with reCAPTCHA v2 modal
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form fields
    const isValid = validateContactForm();
    
    if (!isValid) {
      return false;
    }
    
    // Check if reCAPTCHA is enabled and available
    const recaptchaAvailable = typeof grecaptcha !== 'undefined' && recaptchaEnabled;
    
    // If reCAPTCHA is not enabled or not available, submit directly
    if (!recaptchaAvailable) {
      submitFormViaEmailJS();
      return false;
    }
    
    // If reCAPTCHA already completed, submit immediately
    if (recaptchaCompleted) {
      const recaptchaResponse = grecaptcha.getResponse();
      if (recaptchaResponse) {
        submitFormViaEmailJS();
        return;
      }
    }
    
    // Try to show reCAPTCHA modal, but handle errors gracefully
    try {
      showRecaptchaModal();
      
      // Update button text
      const submitBtn = form.querySelector('button[type=submit]');
      if (submitBtn) {
        submitBtn.textContent = getTranslation('form.completeVerification');
        submitBtn.disabled = true;
      }
    } catch (error) {
      // If reCAPTCHA fails to load, submit without it
      console.warn('reCAPTCHA not available, submitting without verification:', error);
      submitFormViaEmailJS();
    }
    
    return false;
  });
  
  // Close modal when clicking backdrop
  const modal = document.getElementById('recaptcha-modal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target.classList.contains('recaptcha-backdrop')) {
        closeRecaptchaModal();
      }
    });
  }
});
