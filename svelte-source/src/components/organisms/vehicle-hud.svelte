<script lang="ts">
  import { fade } from 'svelte/transition';
  import VehicleHudStore from '../../stores/vehicleHudStore';
  import PlayerStatusHudStore from '../../stores/playerStatusHudStore';
  import ColorEffectStore from '../../stores/colorEffectStore';
  import DebugStore from '../../stores/debugStore';
  import PartialCircleRing from '../hud-shapes/partial-circle-ring.svelte';
  import { faGasPump, faUserSlash } from '@fortawesome/free-solid-svg-icons';
  import { oilCanDrip } from '../../utils/icons';
  import Fa from 'svelte-fa';
  // speed, fuel, fuelColor, showAltitude, altitude, showSeatBelt, seatbeltColor, speedometerText
</script>

{#if $VehicleHudStore.show || DebugStore}
  <div class="absolute car-hud-box">
    <div class="relative">

      <!-- Seatbelt icon logic -->
      {#if $VehicleHudStore.showSeatBelt}
        {#if $VehicleHudStore.showAltitude}
          <div class="absolute left-[60px] bottom-[55px]" transition:fade|local="{{duration: 500}}">
            <Fa icon={faUserSlash} scale={1.1} style="color:{$VehicleHudStore.seatbeltColor}"/>
          </div>
        {:else}
          <div class="absolute left-[100px] bottom-[0px]" transition:fade|local="{{duration: 500}}">
            <Fa icon={faUserSlash} scale={1.1} style="color:{$VehicleHudStore.seatbeltColor}"/>
          </div>
        {/if}
      {/if}

      <!-- Oilcan icon logic -->
      {#if $PlayerStatusHudStore.icons.engine.progressValue <= 75 || DebugStore}
        {#if $VehicleHudStore.showAltitude}
          <div transition:fade|local="{{duration: 100}}">
            <div class="absolute left-[150px] bottom-[0px]">
              <Fa icon={oilCanDrip} scale={1.1}
                style="color:{$ColorEffectStore.icons.engine.colorEffects[$ColorEffectStore.icons.engine.currentEffect].progressColor}"
              />
            </div>
          </div>
        {:else}
          {#if $VehicleHudStore.showSeatBelt}
            <div transition:fade|local="{{duration: 100}}">
              <div class="absolute left-[138px] bottom-[0px]">
                <Fa icon={oilCanDrip} scale={1.1}
                  style="color:{$ColorEffectStore.icons.engine.colorEffects[$ColorEffectStore.icons.engine.currentEffect].progressColor}"
                />
              </div>
            </div>
          {:else}
            <div transition:fade|local="{{duration: 100}}">
              <div class="absolute left-[100px] bottom-[0px]">
                <Fa icon={oilCanDrip} scale={1.1}
                  style="color:{$ColorEffectStore.icons.engine.colorEffects[$ColorEffectStore.icons.engine.currentEffect].progressColor}"
                />
              </div>
            </div>
          {/if}
        {/if}
      {/if}
  
      <div class="">
        <PartialCircleRing maxLengthDisplay={66} rotateDegree={212} ringSize={5.5} progressColor={"white"}
        outlineColor={"white"} outlineColorOpacity={0.6} height={60} width={60} progressValue={$VehicleHudStore.speed}
        text={"MPH"} displayNumber={$VehicleHudStore.speed} maxProgressValue={180}
      />
      </div>
      {#if $VehicleHudStore.showAltitude}
        <div class="absolute left-[80px] bottom-[0px]">
          <PartialCircleRing maxLengthDisplay={75} rotateDegree={225} ringSize={5.5} progressColor={"white"}
            outlineColor={"white"} outlineColorOpacity={0.6} height={60} width={60} progressValue={$VehicleHudStore.altitude}
            text={"ALT"} displayNumber={$VehicleHudStore.altitude} maxProgressValue={750}
          />
        </div>
      {/if}
      <div class="absolute left-[45px] bottom-[-10px]" >
        <PartialCircleRing maxLengthDisplay={69} rotateDegree={235} ringSize={3.5} progressColor={$VehicleHudStore.fuelColor}
          outlineColor={$VehicleHudStore.fuelColor} outlineColorOpacity={0.6} height={36} width={36} progressValue={$VehicleHudStore.fuel}
          icon={faGasPump} iconColor={"white"} iconScaling={0.38}
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .car-hud-box {
    bottom: 7vh;
    left: 20vw;
  }

  @media (min-height: 600px) {
    .car-hud-box {
      bottom: 7vh;
    }
  }

  @media (min-width: 1280px) {
    .car-hud-box {
      transform: scale(0.8);
      left: 18.5vw;
    }
  }
  @media (min-height: 720px) {
    .car-hud-box {
      bottom: 5.5vh;
    }
  }

  @media (min-height: 1200px) {
    .car-hud-box {
      bottom: 5.8vh;
    }
  }

  @media (min-width: 1600px) {
    .car-hud-box {
      transform: scale(1);
      left: 19.5vw;
    }
  }
  @media (min-height: 800px) {
    .car-hud-box {
      bottom: 8.5vh;
    }
  }

  @media (min-width: 1900px) {
    .car-hud-box {
      transform: scale(1);
      left: 17vw;
    }
  }

  @media (min-width: 1920px) {
    .car-hud-box {
      transform: scale(1.2);
      left: 24.5vw;
    }
  }

  @media (min-height: 1440px) {
    .car-hud-box {
      bottom: 7.2vh;
    }
  }

  @media (width: 1920px) and (height: 1200px) {
    .car-hud-box {
      transform: scale(1);
      bottom: 6.3vh;
      left: 20.5vw;
    }
  }

  @media (width: 1920px) and (height: 1080px) {
    .car-hud-box {
      transform: scale(1);
      bottom: 6.5vh;
      left: 18.5vw;
    }
  }

  @media (min-width: 2560px) {
    .car-hud-box {
      transform: scale(1.3);
      left: 19vw;
    }
  }

  @media (min-width: 3440px) {
    .car-hud-box {
      transform: scale(1.3);
      left: 15.5vw;
      bottom: 9vh;
    }
  }

  @media (min-width: 3840px) {
    .car-hud-box {
      transform: scale(2);
      left: 20.5vw;
    }
  }

  @media (min-height: 2160px) {
    .car-hud-box {
      bottom: 9.3vh;
    }
  }
</style>