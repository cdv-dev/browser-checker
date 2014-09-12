/**
 * Binary-Decimal converter
 *
 * @author Dmitriy V. Chernysh
 * @version 2014.09.11
 */

"use strict";

/**
 * Class BinaryDecimalConverter
 *
 * Contains two public methods:
 *
 * toDecimal([input binary value]) - returns array [decimal value, error text]
 * toBinary([input decimal value]) - returns array [binary value, error text]
 *
 */
function BinaryDecimalConverter() {

    var errTxt = {
        notEmpty    : "Input value is not be empty!",
        notNegative : "Input value is not be negative!",
        notDecimal : function(val) {
            return "\"" + val + "\" is not decimal value!";
        },
        notBinary : function(val) {
            return "\"" + val + "\" is not binary value!";
        }
    };

    /**
     * Converting decimal to binary
     *
     * @param decimalValue
     * @returns [binary value, error message]
     */
    var decToBin = function(decimalValue){
        var result = "";

        try{
            if (decimalValue === undefined) {
                throw new Error(errTxt.notEmpty);
            } else if (decimalValue.toString().trim() === "") {
                throw new Error(errTxt.notEmpty);
            } else
            //Checking that the inpit parameter is decimal value
            if ( isNaN(parseInt(decimalValue, 10)) ) {
                throw new Error(errTxt.notDecimal(decimalValue));
            } else if (parseInt(decimalValue, 10) < 0) {
                throw new Error(errTxt.notNegative);
            } else {
                do {
                    if (decimalValue % 2 > 0) {
                        result = "1" + result;
                    } else {
                        result = "0" + result;
                    }
                    decimalValue = parseInt(decimalValue / 2, 10);
                } while(decimalValue > 0);
            }

            return [result, ""];

        } catch(err) {
            return [result, err.message];
        }
    };

    /**
     * Converting binary to decimal
     *
     * @param binaryValue
     * @returns [decimal value, error message]
     */
    var binToDec = function(binaryValue){
        var iResult = 0,
            arr = [];

        try{
            if (binaryValue === undefined) {
                throw new Error(errTxt.notEmpty);
            } else if (binaryValue.toString().trim() === "") {
                throw new Error(errTxt.notEmpty);
            } else {
                arr = binaryValue.toString().split("").reverse();
                for (var i = 0; i < arr.length; i++) {
                    //Checking that the input parameter is not contain characters other than 1 or 0
                    if ((parseInt(arr[i], 10) > 1) || isNaN(parseInt(arr[i], 10))) {
                        throw new Error(errTxt.notBinary(binaryValue));
                        break;
                    } else {
                        iResult += arr[i] * Math.pow(2, i);
                    }
                }
            }

            return [iResult, ""];

        } catch (err) {
            return [iResult, err.message];
        }
    };

    this.toBinary = function(decimalValue) {
       return decToBin(decimalValue);
    };

    this.toDecimal = function(binaryValue) {
       return binToDec(binaryValue);
    };
}

(function(){
  var converter = new BinaryDecimalConverter();

  //New method for object String
  String.prototype.toBinary = function() {
     return converter.toBinary(this)[0];
  };

  //New method for object Number
  Number.prototype.toBinary = function(){
      return converter.toBinary(this)[0];
  };
})();
