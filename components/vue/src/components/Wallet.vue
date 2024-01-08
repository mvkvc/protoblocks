<script setup lang="ts">
    import { useWalletStore } from "../stores/wallet";

    const walletStore = useWalletStore();
</script>

<template>
    <div>
        <h1 v-if="walletStore.hasWallet">Yes</h1>
        <h1 v-else>No</h1>
    </div>
</template>
