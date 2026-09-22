package com.example.demo.controller; // Change to match your actual package name

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/environment")
@CrossOrigin(origins = "*") // Crucial: This prevents browser CORS blocking errors
public class EnvironmentController {

    @GetMapping("/live")
    public Map<String, Object> getLiveEnvironmentData() {
        Map<String, Object> data = new HashMap<>();
        
        // Replace these placeholder numbers with data from your actual sensor/database later
        data.put("temperature", 26.5);
        data.put("humidity", 62);
        data.put("pm25", 15);
        data.put("pm10", 34);

        return data; 
        // This automatically returns exactly what your JS expects:
        // {"temperature":26.5, "humidity":62, "pm25":15, "pm10":34}
    }
}
