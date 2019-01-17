function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    // simulating an API
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe("micking learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
    fetchDogs("hugo");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });
  it("can create a person", () => {
    const me = new Person("Jorge", ["Pizza", "Pasta"]);
    expect(me.name).toBe("Jorge");
  });
  it("can fetch foods", async () => {
    const me = new Person("Jorge", ["Pizza", "Pasta"]);
    // mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(["Sushi", "Ramen"]);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain("Sushi");
  });
});
