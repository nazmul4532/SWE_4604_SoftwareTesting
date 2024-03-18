import org.junit.Test;
import org.junit.Ignore;
import org.junit.BeforeClass;
import org.junit.Before;
import org.example.math;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThrows;

public class mathTest {
    math math = new math();

    @Test
    public void testAdd(){
        assertEquals(5,math.add(2,3));
    }

    @Test
    public void testPrime2ReturnsTrue(){
        assertTrue(math.isPrime(2));
    }

    @Test
    public void testPrime20ReturnsFalse(){
        assertFalse(math.isPrime(20));
    }

    @Test
    public void testPrime47ReturnsTrue(){
        assertTrue(math.isPrime(47));
    }

    @Test
    public void testPrime933ReturnsFalse(){
        assertFalse(math.isPrime(933));
    }

    @Test
    public void testPrime1000000000000ReturnsFalse(){
        assertFalse(math.isPrime(1000000000000L));
    }

    @Ignore("Can't input Float") @Test
    public void testNonIntegerPrime(){
        assertThrows(RuntimeException.class, () -> {
            math.isPrime((long)2.5);
        });
    }

    @Test
    public void testPrimeLessThan2ThrowsException(){
        assertThrows(RuntimeException.class, () -> {
            math.isPrime(1);
        });
    }

    @Test
    public void testPrimeNegativeThrowsException(){
        assertThrows(RuntimeException.class, () -> {
            math.isPrime(-14);
        });
    }
    @Test
    public void testPrimeGreaterThan1000000000000ThrowsException(){
        assertThrows(RuntimeException.class, () -> {
            math.isPrime(1000000000001L);
        });
    }
}
