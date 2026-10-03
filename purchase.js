/* Wallet and purchase boundary kept separate from the page UI.
   This project intentionally has no transaction adapter until a real sale contract is configured. */
(() => {
  const config = window.TOKEN_CONFIG;
  const provider = () => window.ethereum || null;

  async function connectWallet() {
    const wallet = provider();
    if (!wallet || typeof wallet.request !== "function") {
      throw new Error("Совместимый EVM-кошелёк не найден. Установите кошелёк и повторите попытку.");
    }
    const accounts = await wallet.request({ method: "eth_requestAccounts" });
    if (!Array.isArray(accounts) || !accounts[0]) {
      throw new Error("Кошелёк не вернул адрес аккаунта.");
    }
    const chainId = await wallet.request({ method: "eth_chainId" });
    return { account: accounts[0], chainId };
  }

  async function getConnectedWallet() {
    const wallet = provider();
    if (!wallet || typeof wallet.request !== "function") return null;
    const accounts = await wallet.request({ method: "eth_accounts" });
    if (!Array.isArray(accounts) || !accounts[0]) return null;
    const chainId = await wallet.request({ method: "eth_chainId" });
    return { account: accounts[0], chainId };
  }

  function quote(amount) {
    const price = Number(config && config.PRICE_USDT);
    const value = Number(amount);
    if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(value) || value <= 0) return null;
    return value / price;
  }

  async function purchase(parameters) {
    if (!config || !config.PURCHASE_ENABLED || !config.PURCHASE_CONTRACT) {
      throw new Error("Продажа ещё не настроена. Контракт и условия покупки будут опубликованы позже.");
    }
    const adapter = window.WaitPurchaseAdapter;
    if (!adapter || typeof adapter.purchase !== "function") {
      throw new Error("Адаптер смарт-контракта не подключён. Транзакция не отправлена.");
    }
    return adapter.purchase(parameters);
  }

  window.WaitPurchase = Object.freeze({ connectWallet, getConnectedWallet, quote, purchase });
})();
