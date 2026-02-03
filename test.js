// Simple test to validate certificate generation logic
const assert = require('assert');

// Test certificate number generation
function generateCertificateNumber() {
    const prefix = 'MMF';
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${prefix}-${year}-${random}`;
}

// Test date formatting
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Run tests
console.log('Running certificate generator tests...\n');

// Test 1: Certificate number generation
console.log('Test 1: Certificate Number Generation');
const certNum = generateCertificateNumber();
console.log(`Generated certificate number: ${certNum}`);
assert(certNum.startsWith('MMF-'), 'Certificate number should start with MMF-');
assert(certNum.includes(new Date().getFullYear().toString()), 'Certificate number should include current year');
console.log('✓ Certificate number format is correct\n');

// Test 2: Date formatting
console.log('Test 2: Date Formatting');
const testDate = '2026-02-03';
const formatted = formatDate(testDate);
console.log(`Formatted date: ${formatted}`);
assert(formatted.includes('2026'), 'Formatted date should include the year');
assert(formatted.includes('February'), 'Formatted date should include the month name');
console.log('✓ Date formatting is correct\n');

// Test 3: Validation logic simulation
console.log('Test 3: Validation Logic');
function validateForm(recipientName, courseTitle, completionDate) {
    if (!recipientName || !recipientName.trim()) {
        return { valid: false, message: 'Recipient name is required' };
    }
    if (!courseTitle || !courseTitle.trim()) {
        return { valid: false, message: 'Course title is required' };
    }
    if (!completionDate) {
        return { valid: false, message: 'Completion date is required' };
    }
    return { valid: true };
}

const validInput = validateForm('John Doe', 'Quranic Studies', '2026-02-03');
assert(validInput.valid === true, 'Valid input should pass validation');
console.log('✓ Valid input passes validation');

const invalidInput = validateForm('', 'Course', '2026-02-03');
assert(invalidInput.valid === false, 'Empty name should fail validation');
console.log('✓ Invalid input fails validation\n');

console.log('All tests passed! ✓');
