export const validateName = name => {
    const errors = [];
    if (name.length === 0) {
        errors.push("Required")
    }
    if (name.length > 32) {
        errors.push("Must be 32 characters or less");
    }
    return errors;
}

export const validateUserName = username => {
    const errors = [];
    if (username.length === 0) {
        errors.push("Required")
    }
    if (username.length > 32) {
        errors.push("Must be 32 characters or less");
    }
    if (username.includes(' ')) {
        errors.push("Must not contain spaces")
    }
    return errors;
}

export const validateFullName = fullname => {
    const errors = [];
    if (fullname.length === 0) {
        errors.push("Required")
    }
    if (fullname.length > 32) {
        errors.push("Must be 32 characters or less");
    }
    return errors;
}

export const validateEmail = email => {
    const errors = [];
    if (email.length === 0) {
        errors.push("Required")
    }
    if (email.length < 6) {
        errors.push("Must be 6 characters or more");
    }
    if (email.length > 32) {
        errors.push("Must be 32 characters or less");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.push("Invalid email address")
    }
    return errors;
}

export const validateUserNameOrEmail = username => {
    const errors = [];
    if (username.length === 0) {
        errors.push("Required")
    }
    if (username.length > 32) {
        errors.push('Must be 32 characters or less')
    }
    if (username.includes(' ')) {
        errors.push("Must not contain spaces")
    }
    return errors;
}

export const validatePassWord = password => {
    const errors = [];
    if (password.length === 0) {
        errors.push('Required')
    }
    if (password.length > 32) {
        errors.push("Must be 32 characters or less")
    }
    return errors;
}

export const validateConfirmPassword = (password, confirmPassword) => {
    const errors = [];
    if (confirmPassword.length === 0) {
        errors.push('Required')
    }
    if (confirmPassword !== password) {
        errors.push('Must match password')
    }
    return errors;
}