import { defineStore } from 'pinia';
import { PublicKey } from 'o1js';

export const useWalletStore = defineStore('wallet', {
    state: () => {
        return {
            hasWallet: false as boolean,
            loggedIn: false as boolean,
            wallet: null as PublicKey | null,
            wallets: [] as PublicKey[],
        }
    },
})
