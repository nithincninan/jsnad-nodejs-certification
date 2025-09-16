//2-validating-user-input.js | custom error class
//Create a Node.js script that validates user input for a registration form by defining a custom ValidationError 
//and throwing it for invalid inputs (e.g., missing email), then use try/catch to show a user‑friendly message.

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validateRegistration(data) {
  if (!data.username || !data.username.trim() === '') {
    throw new ValidationError('Username is required', 'username');
  }

  if (!data.email || !data.email.trim() === '') {
    throw new ValidationError('Email is required', 'email');
  }

  if (!data.password || !data.password.length <=6) {
    throw new ValidationError('Password must be at least 6 characters long', 'password');
  }
  return true;
}

(async () => {
  try {
    const isValidRegistration = validateRegistration({
      username: 'john_doe',
      email: '',
      password: '123456'
    });
    console.log('✅ Registration data is valid!');
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`❌ Validation Failed for "${error.field}": ${error.message}` );
    } else {
      console.error('❌ An unexpected error occurred:', error);
    }
  }
})();
