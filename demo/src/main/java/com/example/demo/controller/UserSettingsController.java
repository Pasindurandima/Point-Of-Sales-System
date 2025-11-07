package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ApiResponse;
import com.example.demo.dto.UserSettingsDTO;
import com.example.demo.service.UserSettingsService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users/settings")
@RequiredArgsConstructor
public class UserSettingsController {

    private final UserSettingsService settingsService;

    @GetMapping
    public ResponseEntity<ApiResponse<UserSettingsDTO>> getUserSettings(Authentication authentication) {
        Long userId = Long.parseLong(authentication.getName());
        UserSettingsDTO settings = settingsService.getUserSettings(userId);
        return ResponseEntity.ok(ApiResponse.success("Settings retrieved successfully", settings));
    }

    @PutMapping
    public ResponseEntity<ApiResponse<UserSettingsDTO>> updateUserSettings(
            Authentication authentication,
            @RequestBody UserSettingsDTO settingsDTO) {
        Long userId = Long.parseLong(authentication.getName());
        UserSettingsDTO updatedSettings = settingsService.updateUserSettings(userId, settingsDTO);
        return ResponseEntity.ok(ApiResponse.success("Settings updated successfully", updatedSettings));
    }

    @PostMapping("/reset")
    public ResponseEntity<ApiResponse<Void>> resetToDefaults(Authentication authentication) {
        Long userId = Long.parseLong(authentication.getName());
        settingsService.resetToDefaults(userId);
        return ResponseEntity.ok(ApiResponse.success("Settings reset to defaults", null));
    }
}
