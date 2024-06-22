import { expect } from "chai";
import { foodDelivery } from "../food delivery2.js"

describe("Food Delivery Object Tests", function() {
    context("getCategory function", function() {
      it("should return 'Dishes that contain no animal products.' for 'Vegan'", function() {
        expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
      });
  
      it("should return 'Dishes that contain no meat or fish.' for 'Vegetarian'", function() {
        expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
      });
  
      it("should return 'Dishes that contain no gluten.' for 'Gluten-Free'", function() {
        expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
      });
  
      it("should return 'All available dishes.' for 'All'", function() {
        expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
      });
  
      it("should throw an error for an invalid category", function() {
        expect(() => foodDelivery.getCategory("Invalid")).to.throw("Invalid Category!");
      });
    });
  
    context("addMenuItem function", function() {
      it("should add items within the price range and return the correct count", function() {
        const menuItem = [
          { name: "Salad", price: 4.5 },
          { name: "Pizza", price: 9.99 },
          { name: "Pasta", price: 7.5 }
        ];
        const maxPrice = 8;
        const result = foodDelivery.addMenuItem(menuItem, maxPrice);
        expect(result).to.equal("There are 2 available menu items matching your criteria!");
      });
  
      it("should throw an error for invalid menuItem parameter (not an array)", function() {
        expect(() => foodDelivery.addMenuItem("not an array", 10)).to.throw("Invalid Information!");
      });
  
      it("should throw an error for invalid maxPrice parameter (not a number)", function() {
        expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 4.5 }], "not a number")).to.throw("Invalid Information!");
      });
  
      it("should throw an error if menuItem array is empty", function() {
        expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
      });
  
      it("should throw an error if maxPrice is less than 5", function() {
        expect(() => foodDelivery.addMenuItem([{ name: "Salad", price: 4.5 }], 4)).to.throw("Invalid Information!");
      });
    });
  
    context("calculateOrderCost function", function() {
      it("should calculate total cost correctly without discount", function() {
        const shipping = ["standard", "express"];
        const addons = ["sauce", "beverage"];
        const discount = false;
        const result = foodDelivery.calculateOrderCost(shipping, addons, discount);
        expect(result).to.equal("You spend $12.50 for shipping and addons!");
      });
  
      it("should calculate total cost correctly with discount", function() {
        const shipping = ["standard", "express"];
        const addons = ["sauce", "beverage"];
        const discount = true;
        const result = foodDelivery.calculateOrderCost(shipping, addons, discount);
        expect(result).to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
      });
  
      it("should throw an error for invalid shipping parameter (not an array)", function() {
        expect(() => foodDelivery.calculateOrderCost("not an array", ["sauce"], false)).to.throw("Invalid Information!");
      });
  
      it("should throw an error for invalid addons parameter (not an array)", function() {
        expect(() => foodDelivery.calculateOrderCost(["standard"], "not an array", false)).to.throw("Invalid Information!");
      });
  
      it("should throw an error for invalid discount parameter (not a boolean)", function() {
        expect(() => foodDelivery.calculateOrderCost(["standard"], ["sauce"], "not a boolean")).to.throw("Invalid Information!");
      });
    });
  });