import { expect } from "chai";
import { foodDelivery } from "../food delivery.js"

describe("Tests for foodDelivery object", function() {
    describe("getCategory(category)", function() {
      it("should return the correct string for 'Vegan'", function() {
        expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
      });
  
      it("should return the correct string for 'Vegetarian'", function() {
        expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
      });
  
      it("should return the correct string for 'Gluten-Free'", function() {
        expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
      });
  
      it("should return the correct string for 'All'", function() {
        expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
      });
  
      it("should throw an error for an invalid category", function() {
        expect(() => foodDelivery.getCategory("Invalid")).to.throw("Invalid Category!");
      });
    });
  
    describe("addMenuItem(menuItem, maxPrice)", function() {
      it("should add items within the price range and return the correct count", function() {
        const menuItem = [
          { name: "Salad", price: 4.5 },
          { name: "Pizza", price: 9.99 },
          { name: "Pasta", price: 7.5 }
        ];
        const maxPrice = 8;
        expect(foodDelivery.addMenuItem(menuItem, maxPrice)).to.equal("There are 2 available menu items matching your criteria!");
      });
  
      it("should throw an error for invalid menuItem parameter", function() {
        expect(() => foodDelivery.addMenuItem("not an array", 10)).to.throw("Invalid Information!");
      });
  
      it("should throw an error for invalid maxPrice parameter", function() {
        expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 4.5 }], "not a number")).to.throw("Invalid Information!");
      });
  
      it("should throw an error if menuItem array is empty", function() {
        expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
      });
  
      it("should throw an error if maxPrice is less than 5", function() {
        expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 4.5 }], 4)).to.throw("Invalid Information!");
      });
    });
  
    describe("calculateOrderCost(shipping, addons, discount)", function() {
      it("should calculate total cost correctly without discount", function() {
        const shipping = ["standard", "express"];
        const addons = ["sauce", "beverage"];
        const discount = false;
        expect(foodDelivery.calculateOrderCost(shipping, addons, discount)).to.equal("You spend $12.50 for shipping and addons!");
      });
  
      it("should calculate total cost correctly with discount", function() {
        const shipping = ["standard", "express"];
        const addons = ["sauce", "beverage"];
        const discount = true;
        expect(foodDelivery.calculateOrderCost(shipping, addons, discount)).to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
      });
  
      it("should throw an error for invalid shipping parameter", function() {
        expect(() => foodDelivery.calculateOrderCost("not an array", ["sauce"], false)).to.throw("Invalid Information!");
      });
  
      it("should throw an error for invalid addons parameter", function() {
        expect(() => foodDelivery.calculateOrderCost(["standard"], "not an array", false)).to.throw("Invalid Information!");
      });
  
      it("should throw an error for invalid discount parameter", function() {
        expect(() => foodDelivery.calculateOrderCost(["standard"], ["sauce"], "not a boolean")).to.throw("Invalid Information!");
      });
    });
  });