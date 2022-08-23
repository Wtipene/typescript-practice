import Fibonacci from "./Fibonacci";

describe("Fibonacci Tests", () => {

    it("when 5 return 3", () => {
  
      //Arrange
      const input = 5;

      const expected = 3;

      //Act
      const actual: number = Fibonacci(input);

      //Assert
      expect(actual).toBe(expected);
  
    });
  
    it("when 6 return 8", () => {
  
      //Arrange
      const input = 6;
  
      const expected = 8;

      //Act
      const actual: number = Fibonacci(input);
      
      //Assert
      expect(actual).toBe(expected);
    });

    //Alyssa

    it("when 7 return 4", () => {
  
      //Arrange
      const input = 6;
  
      const expected = 8;

      //Act
      const actual: number = Fibonacci(input);
      
      //Assert
      expect(actual).toBe(expected);
    });

    //Sonja

    it("when 5 return 1", () => {
  
      //Arrange
      const input = 5;
  
      const expected = 1;

      //Act
      const actual: number = Fibonacci(input);
      
      //Assert
      expect(actual).toBe(expected);
    });
    
    //Pablo

    it("when 21 return 3", () => {
  
      //Arrange
      const input = 21;
  
      const expected = 3;

      //Act
      const actual: number = Fibonacci(input);
      
      //Assert
      expect(actual).toBe(expected);
    });

    //Nicolas

    it("when 300 return 300", () => {
  
      //Arrange
      const input = 300;
  
      const expected = 300;

      //Act
      const actual: number = Fibonacci(input);
      
      //Assert
      expect(actual).toBe(expected);
    });
  });