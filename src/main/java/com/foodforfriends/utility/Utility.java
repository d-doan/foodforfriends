package com.foodforfriends.utility;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
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
        // "2023-08-30 10:30:00"
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        return dateFormat.format(cal.getTime());
    }

    public static String timeToString(String t) throws ParseException {
        // "2023-08-30 10:30:00"
        SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date d = inputFormat.parse(t);

        // "Wed, Aug 30, 2023 10:30 A.M."
        SimpleDateFormat outputFormat = new SimpleDateFormat("EEE, MMM dd, yyyy hh:mm a");
        return outputFormat.format(d);
    }

    public static void sortReviews(List<Review> r) {
        Collections.sort(r, tc);
    }
}
