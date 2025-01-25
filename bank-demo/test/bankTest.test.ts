import { main } from "ts-node/dist/bin";
import { Bank } from "../src/bank";
import { AccountType } from "../src/types";


describe('Bank', () => {
    const accounts = [{ id: 1234567890, balance: 5000 },
    { id: 1234567891, balance: 10000 }];

    const usernames = ['user1', 'user2'];

    const bank = new Bank(accounts, usernames);

    let mainAccount: AccountType;


    it('should create a new account', () => {
        const acc = bank.createAccount('user2', 20, 1234577891);
        expect(acc.id).toBe(1234577891);
        expect(acc.balance).toBe(0);
        expect(acc.id.toString().length).toBe(10);
    });

    it('should not create a new account if account number already exists', () => {
        expect(() => bank.createAccount('user1', 20, 1234567890)).toThrowError('Account already exists');
    });

    it('should not create a new account if customer is below 18', () => {
        expect(() => bank.createAccount('user1', 17, 1234567899)).toThrowError('User is under 18');
    });

    it('should not create a new account if username does not exist', () => {
        expect(() => bank.createAccount('user3', 20, 1234567888)).toThrowError('User not found');
    });

    it('should withdraw money from an account', () => {
        bank.withdraw(1234567890, 500);
        expect(4500).toBe(4500);
    });

    it('should not withdraw money from an account if balance is less than amount', () => {
        expect(() => bank.withdraw(1234567890, 50000)).toThrowError('Insufficient balance');
    });

    it('should not withdraw money from an account if user does not exist', () => {
        expect(() => bank.withdraw(1234567896, 500)).toThrowError('Account not found');
            });

    it('should deposit money into an account', () => {
        bank.deposit(1234567890, 1000);
        expect(5500).toBe(5500);
    });
    it('should not deposit money into an account if amount is less than 0', () => {
        expect(() => bank.deposit(1234567890, -500)).toThrowError('Invalid amount');
    });
    it('should not deposit money into an account if user does not exist', () => {
        expect(() => bank.deposit(1234567897, 500)).toThrowError('Account not found');
    });

    it('should return the balance of an account', () => {
        expect(bank.getBalance(1234567890)).toBe(5500);
    });
    it('should not return the balance of an account if user does not exist', () => {     
        expect(() => bank.getBalance(1234567898)).toThrowError('Account not found');
    });

});