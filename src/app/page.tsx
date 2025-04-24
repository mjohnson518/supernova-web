import React from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import Hero from '../../../components/sections/Hero';
import Features from '../../../components/sections/Features';
import Technology from '../../../components/sections/Technology';
import EnvironmentalImpact from '../../../components/sections/EnvironmentalImpact';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <Technology />
      <EnvironmentalImpact />
    </MainLayout>
  );
}
