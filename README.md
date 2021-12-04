# Metroid Item Tracker
Item tracker for any and all Metroid games, vanilla or randomized.

Left and right clicks will toggle the icons. Middle click, if you have it, will toggle some overlaid icons, depending on the game and the item.

Left click on items with counters underneath them, will add one to the count. Right click will remove one.

## Setup

If you want to use the tracker on your OBS Studio layout, do the following:

1. On your browser, open a tab and navigate to the published link. It should be reachable under the About section of this GitHub repo.
1. You may opt to toggle the options for Dark Mode and Use Sprite as you wish. Note that not all game options will have the sprites, as of yet. (Work in progress.)
1. Select your intended game from the dropdown menu and click the Ready button. This will generate the URL in the address bar, that you will be linking to.
1. In OBS, create a Browser Source.
1. In the URL field, paste the URL. Make sure that this includes the part after `/?game=` as that will load the correct tracker layout. The tracker should be showing at this point.
1. In the Custom CSS section, add whatever custom CSS you would like to apply to the tracker, to make it legible. I recommend at least a partially-transparent white background for the sake of legibility.
   * If you opt to use Dark Mode, you will limit what you can do, as the background is forced to be shown as black (#000000ff). Feedback will be appreciated. Use at your own discretion.
1. To save yourself from some annoyance, uncheck the option to `Refresh browser when scene becomes active`. Otherwise, any scene change will clear your tracker.
1. Perform whatever modifications you would like to trim the window, place it, and so on.
1. On your scene window, right click your tracker and select Interact. This should open up the tracker in a new window, where you can click on the item icons and the on-screen tracker will update. It is here that any background CSS you specified in the properties for this Browser Source, will be applied. By default, any transparent background will be shown as black (#000000ff), making any expansion counters illegible.

At this point, you should be set up! Please file any issues you may find on my GitHub repo.

## Credits

Code was all written by me. All assets and code may be used for non-profit purposes; I merely ask that correct credit be given to responsible parties for it.

* Rogue Dawn graphics: Grimlock, Optomon, snarfblam and team
* Metroid: A New Galaxy: u/Kelly_Crystal
* Prime2D: Team SCU
* Z1M1: Metalmachine and team
* SMZ3: tewtal and team
* Randovania: Darkszero and team
* AM2R: DoctorM64, team, and continuation team
* Ripped Samus Returns graphics: [KhaosVoid](https://github.com/KhaosVoid/AMSRSE)
* All randomizers: their respective teams

All Metroid game sprites (with exception of Rogue Dawn and AM2R graphics) and Zelda Minish Cap sprites were made by Nintendo, ripped by me, and are used here without express permission and without intent to profit.

Rogue Dawn sprites were made by the Rogue Dawn creators, ripped by me, and are used here without express permission and without intent to profit.

AM2R sprites were made by the AM2R continuation team, ripped by me, and are used here without express permission and without intent to profit.

All Metroid placeholder icons and remainder Zelda sprites were custom-made or kitbashed by me, intending to mimic or approximate an officially-owned graphical style (i.e. Nintendo's Zelda Minish Cap graphical style) without intent to profit.
