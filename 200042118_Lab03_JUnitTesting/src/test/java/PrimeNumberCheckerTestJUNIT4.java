import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import org.example.PrimeNumberChecker;

@RunWith(Parameterized.class)
public class PrimeNumberCheckerTestJUNIT4 {
	private Integer inputNumber;
	   private Boolean expectedResult;
	   private PrimeNumberChecker primeNumberChecker;
	   @Before
	   public void initialize() {
	      primeNumberChecker = new PrimeNumberChecker();
	   }
	   public PrimeNumberCheckerTestJUNIT4(Integer inputNumber, Boolean expectedResult) {
		      this.inputNumber = inputNumber;
		      this.expectedResult = expectedResult;
		   }

		   @Parameterized.Parameters
		   public static Collection primeNumbers() {
		      return Arrays.asList(new Object[][] {
		         { 2, true },
		         { 6, false },
		         { 19, true },
		         { 22, false },
		         { 23, true }
		      });
		   }
		   @Test
		   public void testPrimeNumberChecker() {
		      System.out.println("Parameterized Number is : " + inputNumber);
		      assertEquals(expectedResult, 
		      primeNumberChecker.validate(inputNumber));
		   }
}
