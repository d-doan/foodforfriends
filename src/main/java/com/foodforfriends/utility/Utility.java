package com.foodforfriends.utility;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;

import com.foodforfriends.model.Review;

public class Utility {

    private static Calendar cal = Calendar.getInstance();
    private static TimeComparator tc = new TimeComparator();


    public static double round(double value, int precision) {
        int scale = (int) Math.pow(10, precision);
        return (double) Math.round(value * scale) / scale;
    }

    public static String getTime() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return dateFormat.format(cal.getTime());
    }

    public static void sortReviews(List<Review> r) {
        Collections.sort(r, tc);
    }
}
