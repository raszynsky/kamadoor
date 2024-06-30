import { Component } from '@angular/core';

import { GalleriaComponent } from '@components/galleria/galleria.component';

@Component({
  selector: 'kamadoor-realizations',
  templateUrl: './realizations.component.html',
  styleUrls: ['./realizations.component.scss'],
  imports: [GalleriaComponent],
  standalone: true,
})
export class RealizationsComponent {
  private getItem = (folder: string, prefix: string, number: number) => ({
    itemImageSrc: `assets/realizations/${folder}/${prefix}${number.toString()}.jpg`,
    thumbnailImageSrc: `assets/realizations/${folder}/${prefix}${number.toString()}.jpg`,
    title: `${prefix}${number.toString()}`,
  });

  private getInternalItem = (number: number) =>
    this.getItem('internal', 'DW', number);

  private getInternalWhiteItem = (number: number) =>
    this.getItem('internal-white', 'DWB', number);

  private getInternalStyleItem = (number: number) =>
    this.getItem('internal-style', 'DWS', number);

  private getInternalSlidingItem = (number: number) =>
    this.getItem('internal-sliding', 'DWP', number);

  private getGlassShowersSaunasItem = (number: number) =>
    this.getItem('glass-showers-saunas', 'DSK', number);

  private getLoftItem = (number: number) => this.getItem('loft', '', number);

  private getOverlayItem = (number: number) =>
    this.getItem('overlay', 'DN', number);

  private getTechnicalItem = (number: number) =>
    this.getItem('technical', 'DT', number);

  private getArchedItem = (number: number) =>
    this.getItem('arched', 'DŁ', number);

  private getHousingsItem = (number: number) =>
    this.getItem('housings', 'ZAB', number);

  private getExternalItem = (number: number) =>
    this.getItem('external', 'DZ', number);

  private getWindowsItem = (number: number) =>
    this.getItem('windows', 'O', number);

  private getFloorsItem = (number: number) =>
    this.getItem('floors', 'POD', number);

  private getBalustradesItem = (number: number) =>
    this.getItem('balustrades', 'BS', number);

  private getClosetsItem = (number: number) =>
    this.getItem('closets', 'SZ', number);

  private getWorktopsItem = (number: number) =>
    this.getItem('worktops', 'BL', number);

  internalItems = [
    this.getInternalItem(737),
    this.getInternalItem(738),
    this.getInternalItem(739),
    this.getInternalItem(740),
    this.getInternalItem(741),
    this.getInternalItem(742),
    this.getInternalItem(743),
    this.getInternalItem(744),
    this.getInternalItem(745),
    this.getInternalItem(746),
    this.getInternalItem(747),
    this.getInternalItem(748),
    this.getInternalItem(749),
    this.getInternalItem(750),
    this.getInternalItem(751),
    this.getInternalItem(752),
    this.getInternalItem(753),
    this.getInternalItem(791),
    this.getInternalItem(792),
    this.getInternalItem(793),
    this.getInternalItem(794),
    this.getInternalItem(795),
    this.getInternalItem(796),
    this.getInternalItem(797),
    this.getInternalItem(798),
    this.getInternalItem(799),
    this.getInternalItem(800),
    this.getInternalItem(846),
    this.getInternalItem(847),
    this.getInternalItem(848),
    this.getInternalItem(849),
    this.getInternalItem(850),
    this.getInternalItem(851),
    this.getInternalItem(852),
    this.getInternalItem(922),
    this.getInternalItem(923),
    this.getInternalItem(924),
    this.getInternalItem(1010),
    this.getInternalItem(1011),
  ];

  internalWhiteItems = [
    this.getInternalWhiteItem(713),
    this.getInternalWhiteItem(714),
    this.getInternalWhiteItem(715),
    this.getInternalWhiteItem(716),
    this.getInternalWhiteItem(717),
    this.getInternalWhiteItem(718),
    this.getInternalWhiteItem(719),
    this.getInternalWhiteItem(720),
    this.getInternalWhiteItem(721),
    this.getInternalWhiteItem(722),
    this.getInternalWhiteItem(723),
    this.getInternalWhiteItem(724),
    this.getInternalWhiteItem(754),
    this.getInternalWhiteItem(755),
    this.getInternalWhiteItem(756),
    this.getInternalWhiteItem(757),
    this.getInternalWhiteItem(758),
    this.getInternalWhiteItem(759),
    this.getInternalWhiteItem(760),
    this.getInternalWhiteItem(761),
    this.getInternalWhiteItem(802),
    this.getInternalWhiteItem(831),
    this.getInternalWhiteItem(853),
    this.getInternalWhiteItem(854),
    this.getInternalWhiteItem(855),
    this.getInternalWhiteItem(856),
    this.getInternalWhiteItem(873),
    this.getInternalWhiteItem(874),
    this.getInternalWhiteItem(875),
    this.getInternalWhiteItem(876),
    this.getInternalWhiteItem(877),
    this.getInternalWhiteItem(883),
    this.getInternalWhiteItem(884),
    this.getInternalWhiteItem(890),
    this.getInternalWhiteItem(891),
    this.getInternalWhiteItem(892),
    this.getInternalWhiteItem(905),
    this.getInternalWhiteItem(914),
    this.getInternalWhiteItem(915),
    this.getInternalWhiteItem(916),
    this.getInternalWhiteItem(972),
    this.getInternalWhiteItem(973),
    this.getInternalWhiteItem(974),
    this.getInternalWhiteItem(975),
    this.getInternalWhiteItem(983),
    this.getInternalWhiteItem(984),
    this.getInternalWhiteItem(985),
    this.getInternalWhiteItem(1006),
    this.getInternalWhiteItem(1007),
    this.getInternalWhiteItem(1008),
    this.getInternalWhiteItem(1009),
  ];

  internalStyleItems = [
    this.getInternalStyleItem(725),
    this.getInternalStyleItem(726),
    this.getInternalStyleItem(727),
    this.getInternalStyleItem(728),
    this.getInternalStyleItem(729),
    this.getInternalStyleItem(730),
    this.getInternalStyleItem(731),
    this.getInternalStyleItem(762),
    this.getInternalStyleItem(763),
    this.getInternalStyleItem(764),
    this.getInternalStyleItem(832),
    this.getInternalStyleItem(836),
    this.getInternalStyleItem(837),
    this.getInternalStyleItem(838),
    this.getInternalStyleItem(895),
    this.getInternalStyleItem(896),
    this.getInternalStyleItem(925),
    this.getInternalStyleItem(980),
    this.getInternalStyleItem(981),
    this.getInternalStyleItem(982),
    this.getInternalStyleItem(989),
    this.getInternalStyleItem(990),
    this.getInternalStyleItem(1012),
    this.getInternalStyleItem(1013),
  ];

  internalSlidingItems = [
    this.getInternalSlidingItem(190),
    this.getInternalSlidingItem(191),
    this.getInternalSlidingItem(192),
    this.getInternalSlidingItem(336),
    this.getInternalSlidingItem(337),
    this.getInternalSlidingItem(817),
    this.getInternalSlidingItem(818),
    this.getInternalSlidingItem(819),
    this.getInternalSlidingItem(820),
    this.getInternalSlidingItem(893),
    this.getInternalSlidingItem(894),
    this.getInternalSlidingItem(913),
    this.getInternalSlidingItem(917),
    this.getInternalSlidingItem(949),
    this.getInternalSlidingItem(950),
    this.getInternalSlidingItem(960),
    this.getInternalSlidingItem(979),
    this.getInternalSlidingItem(1003),
  ];

  glassShowersSaunasItems = [
    this.getGlassShowersSaunasItem(186),
    this.getGlassShowersSaunasItem(187),
    this.getGlassShowersSaunasItem(369),
    this.getGlassShowersSaunasItem(370),
    this.getGlassShowersSaunasItem(371),
    this.getGlassShowersSaunasItem(372),
    this.getGlassShowersSaunasItem(373),
    this.getGlassShowersSaunasItem(374),
    this.getGlassShowersSaunasItem(711),
    this.getGlassShowersSaunasItem(712),
    this.getGlassShowersSaunasItem(768),
    this.getGlassShowersSaunasItem(769),
    this.getGlassShowersSaunasItem(770),
    this.getGlassShowersSaunasItem(771),
    this.getGlassShowersSaunasItem(772),
    this.getGlassShowersSaunasItem(773),
    this.getGlassShowersSaunasItem(774),
    this.getGlassShowersSaunasItem(775),
    this.getGlassShowersSaunasItem(776),
    this.getGlassShowersSaunasItem(804),
    this.getGlassShowersSaunasItem(805),
    this.getGlassShowersSaunasItem(806),
    this.getGlassShowersSaunasItem(807),
    this.getGlassShowersSaunasItem(808),
    this.getGlassShowersSaunasItem(809),
    this.getGlassShowersSaunasItem(810),
    this.getGlassShowersSaunasItem(811),
    this.getGlassShowersSaunasItem(812),
    this.getGlassShowersSaunasItem(813),
    this.getGlassShowersSaunasItem(815),
    this.getGlassShowersSaunasItem(816),
    this.getGlassShowersSaunasItem(839),
    this.getGlassShowersSaunasItem(840),
    this.getGlassShowersSaunasItem(844),
    this.getGlassShowersSaunasItem(845),
    this.getGlassShowersSaunasItem(870),
    this.getGlassShowersSaunasItem(871),
    this.getGlassShowersSaunasItem(872),
    this.getGlassShowersSaunasItem(886),
    this.getGlassShowersSaunasItem(887),
    this.getGlassShowersSaunasItem(888),
    this.getGlassShowersSaunasItem(889),
    this.getGlassShowersSaunasItem(918),
    this.getGlassShowersSaunasItem(919),
    this.getGlassShowersSaunasItem(920),
    this.getGlassShowersSaunasItem(921),
    this.getGlassShowersSaunasItem(988),
  ];

  loftItems = [
    this.getLoftItem(879),
    this.getLoftItem(880),
    this.getLoftItem(881),
    this.getLoftItem(882),
    this.getLoftItem(900),
    this.getLoftItem(901),
    this.getLoftItem(902),
    this.getLoftItem(910),
    this.getLoftItem(911),
    this.getLoftItem(930),
    this.getLoftItem(931),
    this.getLoftItem(943),
    this.getLoftItem(945),
    this.getLoftItem(961),
    this.getLoftItem(962),
    this.getLoftItem(991),
    this.getLoftItem(992),
    this.getLoftItem(993),
    this.getLoftItem(994),
    this.getLoftItem(995),
    this.getLoftItem(1004),
    this.getLoftItem(1014),
    this.getLoftItem(1015),
    this.getLoftItem(1019),
    this.getLoftItem(1024),
    this.getLoftItem(1025),
    this.getLoftItem(1026),
  ];

  overlayItems = [
    this.getOverlayItem(708),
    this.getOverlayItem(709),
    this.getOverlayItem(710),
    this.getOverlayItem(765),
    this.getOverlayItem(766),
    this.getOverlayItem(767),
    this.getOverlayItem(951),
    this.getOverlayItem(952),
    this.getOverlayItem(953),
    this.getOverlayItem(954),
    this.getOverlayItem(955),
    this.getOverlayItem(956),
    this.getOverlayItem(957),
    this.getOverlayItem(958),
    this.getOverlayItem(959),
    this.getOverlayItem(976),
    this.getOverlayItem(977),
    this.getOverlayItem(978),
    this.getOverlayItem(986),
    this.getOverlayItem(987),
  ];

  technicalItems = [this.getTechnicalItem(188), this.getTechnicalItem(189)];

  archedItems = [this.getArchedItem(339), this.getArchedItem(340)];

  housingsItems = [
    this.getHousingsItem(732),
    this.getHousingsItem(733),
    this.getHousingsItem(734),
    this.getHousingsItem(735),
    this.getHousingsItem(736),
    this.getHousingsItem(778),
    this.getHousingsItem(779),
    this.getHousingsItem(780),
    this.getHousingsItem(781),
    this.getHousingsItem(857),
    this.getHousingsItem(885),
    this.getHousingsItem(898),
    this.getHousingsItem(899),
  ];

  externalItems = [
    this.getExternalItem(193),
    this.getExternalItem(315),
    this.getExternalItem(316),
    this.getExternalItem(317),
    this.getExternalItem(782),
    this.getExternalItem(783),
    this.getExternalItem(821),
    this.getExternalItem(822),
    this.getExternalItem(823),
    this.getExternalItem(824),
    this.getExternalItem(825),
    this.getExternalItem(826),
    this.getExternalItem(827),
    this.getExternalItem(829),
    this.getExternalItem(830),
    this.getExternalItem(867),
    this.getExternalItem(897),
    this.getExternalItem(906),
    this.getExternalItem(907),
    this.getExternalItem(926),
    this.getExternalItem(927),
    this.getExternalItem(928),
    this.getExternalItem(929),
    this.getExternalItem(971),
  ];

  windowsItems = [
    this.getWindowsItem(179),
    this.getWindowsItem(180),
    this.getWindowsItem(181),
    this.getWindowsItem(182),
    this.getWindowsItem(183),
    this.getWindowsItem(833),
    this.getWindowsItem(834),
    this.getWindowsItem(835),
    this.getWindowsItem(908),
    this.getWindowsItem(909),
    this.getWindowsItem(932),
  ];

  floorsItems = [
    this.getFloorsItem(184),
    this.getFloorsItem(185),
    this.getFloorsItem(324),
    this.getFloorsItem(325),
    this.getFloorsItem(784),
    this.getFloorsItem(785),
    this.getFloorsItem(786),
    this.getFloorsItem(787),
    this.getFloorsItem(828),
    this.getFloorsItem(878),
    this.getFloorsItem(933),
    this.getFloorsItem(934),
  ];

  balustradesItems = [
    this.getBalustradesItem(318),
    this.getBalustradesItem(319),
    this.getBalustradesItem(320),
    this.getBalustradesItem(341),
    this.getBalustradesItem(788),
    this.getBalustradesItem(789),
    this.getBalustradesItem(790),
    this.getBalustradesItem(841),
    this.getBalustradesItem(842),
    this.getBalustradesItem(843),
  ];

  closetItems = [
    this.getClosetsItem(331),
    this.getClosetsItem(332),
    this.getClosetsItem(333),
    this.getClosetsItem(334),
    this.getClosetsItem(342),
  ];

  worktopsItems = [this.getWorktopsItem(321), this.getWorktopsItem(322)];

  items = [
    {
      label: 'Drzwi wewnętrzne',
      items: this.internalItems,
    },
    {
      label: 'Drzwi wewnętrzne białe',
      items: this.internalWhiteItems,
    },
    {
      label: 'Drzwi wewnętrzne stylizowane',
      items: this.internalStyleItems,
    },
    {
      label: 'Drzwi wewnętrzne przesuwne',
      items: this.internalSlidingItems,
    },
    {
      label: 'Drzwi szklane, kabiny prysznicowe, sauny i inne zabudowy',
      items: this.glassShowersSaunasItems,
    },
    {
      label: 'Loft',
      items: this.loftItems,
    },
    {
      label: 'Drzwi nakładkowe',
      items: this.overlayItems,
    },
    {
      label: 'Drzwi techniczne',
      items: this.technicalItems,
    },
    {
      label: 'Drzwi łukowe',
      items: this.archedItems,
    },
    {
      label: 'Indywidualnie zaprojektowane i wykonane zabudowy',
      items: this.housingsItems,
    },
    {
      label: 'Drzwi zewnętrzne',
      items: this.externalItems,
    },
    {
      label: 'Okna',
      items: this.windowsItems,
    },
    {
      label: 'Podłogi',
      items: this.floorsItems,
    },
    {
      label: 'Balustrady szklane',
      items: this.balustradesItems,
    },
    {
      label: 'Szafy',
      items: this.closetItems,
    },
    {
      label: 'Blaty',
      items: this.worktopsItems,
    },
  ];
}
