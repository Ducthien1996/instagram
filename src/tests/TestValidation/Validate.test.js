import {
    validateEmail,
    validateName,
    validatePassWord,
    validateUserName,
    validateUserNameOrEmail,
    validateFullName,
    validateConfirmPassword
} from '../../commons/validation'


describe('Test validation ', () => {
    describe('Test validateName', () => {
        it('should test validateName required', () => {
            const name = ''
            expect(validateName(name)).toEqual(['Required'])
        })
        it('should test validateName > 32', () => {
            const name = 'testnametestnametestnametestnametestnametestnametesttestnametestnametestnametestnametestnametestnametest'
            expect(validateName(name)).toEqual(['Must be 32 characters or less'])
        })
    })

    describe('Test validateUserName', () => {
        it('should Test validateUseName required', () => {
            const username = ''
            expect(validateUserName(username)).toEqual(['Required'])
        })
        it('should Test validateUseName > 32', () => {
            const username = 'testnametestnametestnametestnametestnametestnametesttestnametestnametestnametestnametestnametestnametest'
            expect(validateUserName(username)).toEqual(['Must be 32 characters or less'])
        })
        it('Should Test validateUserName not contain spaces', () => {
            const username = 'user name'
            expect(validateUserName(username)).toEqual(['Must not contain spaces'])
        })
    })

    describe('Test validateEmail', () => {
        it('should Test validateEmail required', () => {
            const email = ''
            expect(validateEmail(email)[0]).toEqual('Required')
        })
        it('should Test validateEmail > 32', () => {
            const email = 'nguyenvananguyenvananguyenvananguyenvana@gmail.com'
            expect(validateEmail(email)).toEqual(['Must be 32 characters or less'])
        })
        it('should Test validateEmail < 6', () => {
            const email = 'n@.m'
            expect(validateEmail(email)[0]).toEqual('Must be 6 characters or more')
        })
        it('should Test validateEmail Invalid ', () => {
            const email = 'nguenvana.gmail'
            expect(validateEmail(email)).toEqual(['Invalid email address'])
        })
    })

    describe('Test validatePassword', () => {
        it('should Test validatePassWord Required', () => {
            const password = ''
            expect(validatePassWord(password)).toEqual(['Required'])
        })
        it('should Test validatePassWord < 32', () => {
            const password = 'pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word pass word'
            expect(validatePassWord(password)).toEqual(['Must be 32 characters or less'])
        })
    })

    describe('Test validateUserNameOrEmail', () => {
        it('should Test validateUserNameOrEmail Required', () => {
            const username = ''
            expect(validateUserNameOrEmail(username)).toEqual(['Required'])
        })
        it('should test validateUserNameOrEmail < 32', () => {
            const username = 'usernameusernameusernameusernameusernameusernameusernameusernameusernameusernameusernameusername'
            expect(validateUserNameOrEmail(username)).toEqual(['Must be 32 characters or less'])
        })
        it('should Test validateUserNameOrEmail contain space', () => {
            const username = 'thien dt'
            expect(validateUserNameOrEmail(username)).toEqual(['Must not contain spaces'])
        })
    })

    describe('Test valdidateFullname', () => {
        it('Shoud test validate Fullname Required', () => {
            const fullname = ''
            expect(validateFullName(fullname)).toEqual(['Required'])
        })
        it('Shoud test validate Fullname > 32 characters', () => {
            const fullname = 'test full name character test full name charactertest full name charactertest full name charactertest full name charactertest full name charactertest full name charactertest full name charactertest full name character'
            expect(validateFullName(fullname)).toEqual(['Must be 32 characters or less'])
        })
    })

    describe('Test validate Confirm Password', () => {
        it('Should Test validate confirm password Required', () => {
            const password =''
            const confirmPassowrd = ''
            expect(validateConfirmPassword(password, confirmPassowrd)).toEqual(['Required'])
        })
        it('Should Test validate confirm password must match password', () => {
            const password = 123456
            const confirmPassword = 123454
            expect(validateConfirmPassword(password, confirmPassword)).toEqual(['Must match password'])
        })
    })
})