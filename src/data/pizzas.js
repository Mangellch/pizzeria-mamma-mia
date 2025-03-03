import React, { useState, useEffect } from 'react';

export const getPizzas = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/pizzas');
    if (!response.ok) {
      throw new Error('Error fetching pizzas');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch pizzas:', error);
    return [];
  }
};
