<script lang="ts">
  import type { optionalHudIconMetaShapeType, shapePropsType } from '../../types/types';
  import SplitRingCircle from '../hud-shapes/split-circle.svelte';
  import InnerCircle from '../hud-shapes/inner-circle.svelte';
  import RotatedSquare from '../hud-shapes/rotated-square.svelte';
  import RegularSquare from '../hud-shapes/regular-square.svelte';
  import CircleFill from '../hud-shapes/circle-fill.svelte';
  import SquareFill from '../hud-shapes/square-fill.svelte';
  import RotatedSquareFill from '../hud-shapes/rotated-square-fill.svelte';
  import Badge from '../hud-shapes/badge.svelte';
  import Transparent from '../hud-shapes/transparent.svelte';

  export let hudIconInfo: optionalHudIconMetaShapeType = {};

  let shapeProps: shapePropsType;
  $: {
    shapeProps = (({ shape, isShowing, ...o }) => o)(hudIconInfo);
  }
  
</script>

{#if hudIconInfo.shape == 'split-circle'}
  <SplitRingCircle {...shapeProps} />
{:else if hudIconInfo.shape == 'inner-circle'}
  <InnerCircle {...shapeProps} />
{:else if hudIconInfo.shape == 'rotated-square'}
  <RotatedSquare {...shapeProps} />
{:else if hudIconInfo.shape == 'regular-square'}
  <RegularSquare {...shapeProps} />
{:else if hudIconInfo.shape == 'circle-fill'}
  <CircleFill {...shapeProps} />
{:else if hudIconInfo.shape == 'square-fill'}
  <SquareFill {...shapeProps} />
{:else if hudIconInfo.shape == 'rotated-square-fill'}
  <RotatedSquareFill {...shapeProps}/>
{:else if hudIconInfo.shape == 'badge'}
  <Badge {...shapeProps}/>
{:else if hudIconInfo.shape == 'transparent'}
  <Transparent {...shapeProps}/>
{/if }