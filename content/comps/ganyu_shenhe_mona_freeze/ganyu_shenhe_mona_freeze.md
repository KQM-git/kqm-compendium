---
title: Ganyu Shenhe Venti Mona Freeze
authors:
  - CC
healing: 2
shielding: 1
difficulty: 2
tags:
  - Ganyu
  - Shenhe
  - Venti
  - Mona
  - Quickswap
  - Multi-Target
  - Sustained
  - Freeze
  - F2P Gears
pros:
  - Very good damage against 2 or more enemies that are freezable and can be crowd controlled by Venti's Burst
  - Majority of the time is spent in iframes and with enemies frozen making it very comfy
  - Made up of units that are highly specialized for freeze and aren't highly contested for as a result
  - ER Requirements are easily achievable making building relatively easier
cons:
  - Completely made up of limited and standard 5-star characters which means it has a high accessibility wall  
  - Swaps need to be done as fast as possible and learning Ganyu M1-R Cancel (for PC) is highly encouraged to keep the rotation times low
  - Requires aiming which isn't for everybody
  - Performance numbers all rely upon the assumption that there are more than 2 enemies, they are freezable, and at least one of them has a weak spot which isn't always the case, resulting in this comp performing worse or not worth considering in certain situations
sheet_url: https://docs.google.com/spreadsheets/d/1r8_w0ZKApBwc-VrNzdP1811syBvoNbgIPCNHMyzlwY4/edit#gid=1035782785
rotation:
  duration: 21s
  video_url: https://youtu.be/59U0leDEaWs
characters:
  - name: Ganyu
    star: 5
    constellation: 0
    weapon:
      name: Prototype Crescent
      refinement: 5
    artifacts:
      - Blizzard Strayer
    hp: 16089
    atk: 2101
    def: 750
    em: 40
    cr: 44.72%
    cd: 216.8%
    er: 111.02%
    dps: 35601
  - name: Shenhe
    star: 5
    constellation: 0
    weapon:
      name: Favonius Lance
      refinement: 3
    artifacts:
      - Noblesse Oblige
    hp: 19599
    atk: 2618
    def: 973
    em: 40
    cr: 46.03%
    cd: 122.82%
    er: 163.66%
    dps: 3776
  - name: Venti
    star: 5
    constellation: 0
    weapon:
      name: The Stringless
      refinement: 3
    artifacts:
      - Viridescent Venerer
    hp: 16899
    atk: 1195
    def: 793
    em: 766
    cr: 41.41%
    cd: 109.58%
    er: 165.06%
    dps: 8637
  - name: Mona
    star: 5
    constellation: 0
    weapon:
      name: Prototype Amber
      refinement: 5
    artifacts:
      - Tenacity of the Millelith
    hp: 23164
    atk: 1577
    def: 776
    em: 40
    cr: 40.96%
    cd: 109.58%
    er: 194.82%
    dps: 1606
---
 
# **Notes**

This calc follows the current KQMC Standards, simulated with 2 targets but only accounting for the damage on the primary target, done over the course of 5 rotations, and uses "F2P" Gears (Shenhe's Favonius Lance and Venti's The Stringless are not craftables and can be only obtained through gacha but are both non-limited 4-star weapons.) Other assumptions include 25 Icicles, 15 Venti Burst Absorption Procs, and 2 Shenhe Favonius Procs per rotation. 25 Icicle assumption was derived by weighing the average icicles for split enemies and sucked by Venti's Burst/Frozen (16.73 Icicles = 2 Split Targets, 26.73 = 2 Venti'd Targets) and each multiplied by the duration of the mentioned conditions based on the Rotation Timeline ((3/15) * 16.73 + (12/15) * 26.73 = 24.73 ≈ 25 Icicles) which can be found in the sheets. Gcsim numbers don't penalize periods where there's no grouping nor freeze as it's not implemented at the time of writing, but allows for Favonius refinements and proc rate variance to affect the DPS - which this sheet doesn't as it assumes 2 Fav Procs every rotation and isn't taking the Fav Proc variance into account. To solve these issues, substat distribution in the sheets are first optimized through Solver Settings recommended by KQM, and was then manually optimized to perform well in both the sheets and gcsim - which causes the DPS in the sheets to slightly go down in favor of better Fav Proc situation where gcsim numbers helped in assessment, while staying within the boundaries with regards to substats KQMC Standards has set.  

This team has a very good primary target damage for situations where there are 2 or more enemies that are freezable, can be crowd controlled by Venti's Burst, and one of the enemies has a weak spot if using Prototype Crescent. But considering this isn't always the case, this results in this comp performing worse or not worth considering in certain situations such as against non-freezable enemies, bosses, and pure single target scenarios. The majority of the time is spent in i-frames and with enemies frozen making it very comfy to play. But considering this comp requires aiming with Ganyu which some people may find hard to do especially for mobile or controller users, that may not necessarily be the case for all people. This comp is completely made up of limited and standard 5-star characters which means it has a high accessibility wall but is also being made up of units that are highly specialized for freeze and aren't highly contested for. While The Stringless on Venti is easily replaceable, the Favonius Lance on Shenhe plays a major role in this comp's rotation consistency and lowering everyone's ER requirements (which also results in easier artifact farming), and so refinement 3 or higher is what's recommended for a chance of proc on both Shenhe Es (which has a 10s cooldown and R3 Favonius Lance has 9s) and lower variance. Swaps need to be done as fast as possible and learning Ganyu M1-R Cancel for PC users is highly encouraged to keep the rotation times low.
 
# **Rotation Notes**
 
**General Bows Rotation:**
Shenhe tEQ  
Ganyu EQ  
Venti EQ  
Mona QE  
Shenhe tE  
Venti E  
Ganyu E 4CA  

**Prototype Crescent Rotation:**
Ganyu CA (aim for the weak spot)  
Shenhe tEQ  
Ganyu EQ  
Venti EQ  
Mona QE  
Shenhe tE  
Venti E  
Ganyu E 3CA  
 
**Disclaimer:** Real-world rotation times and execution will vary from player to player and from situation to situation, which will affect the damage per second in practice. 
 