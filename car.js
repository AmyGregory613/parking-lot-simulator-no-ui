"use strict";

var randomColor = function (){ 
	var possibleColors = ["white", "red", "black", "aqua", "light blue", "lime green"]
	return possibleColors[Math.floor(Math.random()*possibleColors.length)];
	}

var randomMake = function (){
	var possibleMakes = ["ford", "subaru", "toyota", "chevy", "hundai", "tesla", "nissan"];
	return possibleMakes[Math.floor(Math.random()*possibleMakes.length)];
}
var randomModel = function () {
	var possibleModels = ["super", "delux", "mega","ultra"];
	return possibleModels[Math.floor(Math.random()*possibleModels.length)];
}

var randomYear = function year(min, max) {
	    var result = Math.floor(Math.random() * (2019-2000)) + 2000;
	    // console.log(result);
	    return result;
	}

function randomPlateNumber() {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	  for (var i = 0; i < 6; i++){
	    text += possible[Math.floor(Math.random() * possible.length)];
		}
	  return text;
	  
	}
var randomTimeSpentInLot = getRandom(1000, 20*1000);

function getRandom(min, max) {
	    var result = Math.random() * (max - min) + min;
	    return Math.round(result);
	}

// make one random car
var Car = function(color, make, model, year, plateNumber, timeSpentInLot) {
		this.Color = randomColor();
		this.Make = randomMake();
		this.Model = randomModel();
		this.Year = randomYear();
		this.PlateNumber = randomPlateNumber();
		this.TimeSpentInLot = randomTimeSpentInLot;
		this.parked = false;

		this.park = function(){
			this.parked = true;
			setTimeout(function(e){
				e.leave();
			}, time, this);
		}
		this.leave = function (){
			this.parked = false;
		}
	}

// let car = new Car();

	
const NUMBER_OF_CARS = 100;

function carFactory(){
	var result = [];
		for(var i = 0; i< NUMBER_OF_CARS;i++){
			let car = new Car();
			result.push(car);
		}
		console.log(result);
		return result;
	}
	
carFactory();
	


