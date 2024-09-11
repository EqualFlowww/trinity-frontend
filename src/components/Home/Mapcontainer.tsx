import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import classes from './MapContainer.module.scss';
import courseMapImage from '@/assets/images/trinitycc-map-square.webp';

interface ViewBoxSize { 
  width: number;
  height: number;
  heightToWidthRatio: number;
}

interface NaturalMapSize{
  width: number;
  height: number;
  heightToWidthRatio: number;
  entireWidth: number;
  entireHeight: number;
  extraMapToMapWidthRatio: number;
  extraMapToMapHeightRatio: number;
}

interface MapBoxStyle{
  width: number;
  height: number;
  top: string;
  left: string;
}

interface MapContainerProps