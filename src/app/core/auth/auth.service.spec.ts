import { AuthService } from './auth.service';

describe('isLoggedIn', () => {
    it('should return true if user is logged in', () => {
        const result = AuthService.prototype.isLoggedIn();
        expect(result).toBe(true);
    });
});
