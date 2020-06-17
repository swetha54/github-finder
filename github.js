class github {
  constructor() {
    this.client_id = "7c87fe766dcd195429f1";
    this.client_secret = "d8e114a6801175826196e0119b0488cebf2912f1";
  }
  async getuser(user) {
    const response = await fetch(
      `https://api.github.com/users/${user}?client_id=${this
        .client_id}&client_secret=${this.client_secret}`
    );
    const profile = await response.json();
    return {
      profile
    };
  }
}
