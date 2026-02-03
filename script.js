// Certificate Generator Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('certificateForm');
    const certificatePreview = document.getElementById('certificatePreview');
    const resetBtn = document.getElementById('resetBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const printBtn = document.getElementById('printBtn');

    // Auto-set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('completionDate').value = today;

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            generateCertificate();
        }
    });

    // Reset button handler
    resetBtn.addEventListener('click', function() {
        form.reset();
        certificatePreview.classList.remove('active');
        document.getElementById('completionDate').value = today;
    });

    // Download button handler
    downloadBtn.addEventListener('click', function() {
        downloadCertificate();
    });

    // Print button handler
    printBtn.addEventListener('click', function() {
        window.print();
    });

    function validateForm() {
        const recipientName = document.getElementById('recipientName').value.trim();
        const courseTitle = document.getElementById('courseTitle').value.trim();
        const completionDate = document.getElementById('completionDate').value;

        if (!recipientName) {
            alert('Please enter the recipient name');
            return false;
        }

        if (!courseTitle) {
            alert('Please enter the course title');
            return false;
        }

        if (!completionDate) {
            alert('Please select a completion date');
            return false;
        }

        return true;
    }

    function generateCertificate() {
        // Get form values
        const recipientName = document.getElementById('recipientName').value.trim();
        const courseTitle = document.getElementById('courseTitle').value.trim();
        const completionDate = document.getElementById('completionDate').value;
        let certificateNumber = document.getElementById('certificateNumber').value.trim();
        const instructorName = document.getElementById('instructorName').value.trim();

        // Generate certificate number if not provided
        if (!certificateNumber) {
            certificateNumber = generateCertificateNumber();
        }

        // Format the completion date
        const formattedDate = formatDate(completionDate);
        const currentDate = formatDate(today);

        // Update certificate content
        document.getElementById('certRecipientName').textContent = recipientName;
        document.getElementById('certCourseTitle').textContent = courseTitle;
        document.getElementById('certCompletionDate').textContent = formattedDate;
        document.getElementById('certNumber').textContent = `Certificate No: ${certificateNumber}`;
        document.getElementById('certIssueDate').textContent = currentDate;

        // Update instructor name if provided
        const instructorElement = document.getElementById('certInstructorName');
        if (instructorName) {
            instructorElement.textContent = instructorName;
            instructorElement.style.display = 'block';
        } else {
            instructorElement.textContent = '';
            instructorElement.style.display = 'none';
        }

        // Show certificate preview
        certificatePreview.classList.add('active');

        // Scroll to certificate
        certificatePreview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function generateCertificateNumber() {
        const prefix = 'MMF';
        const year = new Date().getFullYear();
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `${prefix}-${year}-${random}`;
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function downloadCertificate() {
        const certificate = document.getElementById('certificate');
        const downloadButton = downloadBtn;
        
        // Disable button during download
        downloadButton.disabled = true;
        downloadButton.textContent = 'Generating...';

        // Use html2canvas to convert the certificate to an image
        html2canvas(certificate, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false,
            useCORS: true
        }).then(canvas => {
            // Create download link
            const link = document.createElement('a');
            const recipientName = document.getElementById('recipientName').value.trim();
            const filename = `Certificate_${recipientName.replace(/\s+/g, '_')}.png`;
            
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();

            // Re-enable button
            downloadButton.disabled = false;
            downloadButton.textContent = 'Download Certificate (PNG)';
        }).catch(error => {
            console.error('Error generating certificate:', error);
            alert('Failed to generate certificate image. Please try again.');
            downloadButton.disabled = false;
            downloadButton.textContent = 'Download Certificate (PNG)';
        });
    }

    // Add real-time preview update (optional enhancement)
    const formInputs = form.querySelectorAll('input');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (certificatePreview.classList.contains('active')) {
                // Auto-update preview if certificate is already generated
                const recipientName = document.getElementById('recipientName').value.trim();
                const courseTitle = document.getElementById('courseTitle').value.trim();
                
                if (recipientName) {
                    document.getElementById('certRecipientName').textContent = recipientName;
                }
                
                if (courseTitle) {
                    document.getElementById('certCourseTitle').textContent = courseTitle;
                }
            }
        });
    });
});
