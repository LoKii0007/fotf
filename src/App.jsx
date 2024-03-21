import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./components/layout"
import Terms from "./components/terms"
import Legal from "./components/legal"
import Privacy from "./components/privacy"
import Home from './screens/home'
 

function App() {

  const border1 = <svg width="1867" height="1079" viewBox="0 0 1867 1079" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_306_1167)">
      <path id='layout-text-bg' d="M801 36.5L834 12H1038L1069 36.5V58L1038.5 88H834L801 57.5V36.5Z" fill="#07CE02" fillOpacity="0.12" />
    </g>
    <g filter="url(#filter1_d_306_1167)">
      <path id='layout-svg' d="M13.3412 780.269V87.6789L66.0349 35H801L833.5 11H940H1039L1069.5 35H1800.94L1853.62 87.6789V780.269M64.479 786.478V763.228L83.8465 743.86V673.37L50.9203 640.444V219.383M58.2849 95.4288L95.4639 58.235M95.4639 58.235H428.593M95.4639 58.235H801L833.5 88.5H940H1039L1069.5 58.235L1771.5 58.235M79.9789 973.346L122.581 1015.95H643.961M81.0015 1013.64L15.9346 948.555L14.5 822.5M24.1881 985.216L74.8073 1035.83H363.007M44.6819 198.549L57.7664 211.633M57.7664 198.549L44.6819 211.633M57.0699 796.45L70.1544 809.535M70.1544 796.45L57.0699 809.535M135.413 962.129L158.5 985.216M158.5 962.129L135.413 985.216M1802.5 786.478V763.228L1783.13 743.86V673.37L1816.06 640.444V219.383M1808.69 95.4288L1771.5 58.235M1771.5 58.235H1438.38M1787 1004.94L1744.39 1047.55H1223M1785.96 1045.23L1851.04 980.152L1852.6 821.597M1842.77 1016.81L1792.17 1067.43H1503.97M1822.29 198.549L1809.21 211.634M1809.21 198.549L1822.29 211.634M1809.89 796.45L1796.81 809.535M1796.81 796.45L1809.89 809.535M1692.5 949.919L1669.43 973.005M1669.43 949.919L1692.5 973.005M11 786.552H16.6457V792.198H11V786.552ZM11 797.532H16.6457V803.178H11V797.532ZM11 808.513H16.6457V814.158H11V808.513ZM53.1134 109.714H59.3074V115.908H53.1134V109.714ZM53.1134 121.761H59.3075V127.955H53.1134V121.761ZM53.1134 133.823H59.3075V140.017H53.1134V133.823ZM91.0174 20.9876H107.54V26.5H91.0174V20.9876ZM116.49 20.9876H133.012V26.5H116.49V20.9876ZM141.978 20.9876H158.5V26.5H141.978V20.9876ZM1855.96 792.198H1850.32V786.552H1855.96V792.198ZM1855.96 803.178H1850.32V797.532H1855.96V803.178ZM1855.96 814.158H1850.32V808.513H1855.96V814.158ZM1813.86 115.922H1807.67V109.728H1813.86V115.922ZM1813.86 127.97H1807.67V121.776H1813.86V127.97ZM1813.86 140.017H1807.67V133.823H1813.86V140.017ZM1433.5 26.5H1416.98V20.9876H1433.5V26.5ZM1408.03 26.5H1391.5V20.9876H1408.03V26.5ZM1382.54 26.5H1366.02V20.9876H1382.54V26.5Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" stroke-miterlimit="10" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter2_d_306_1167)">
      <path id='layout-text' d="M844.256 67.048H834.8V41.8L844.064 32.344H881.264V41.8H844.256V44.872H872V54.568H844.256V67.048ZM932.545 67.048H895.345L886.081 57.592V32.392H923.281L932.545 41.848V67.048ZM923.089 57.592V41.848H895.537V57.592H923.089ZM965.299 67.048H955.843V41.8H946.819V52.312H937.363V32.344H983.779V52.312H974.323V41.8H965.299V67.048ZM998.053 67.048H988.597V41.8L997.861 32.344H1035.06V41.8H998.053V44.872H1025.8V54.568H998.053V67.048Z" fill="#07CE02" />
    </g>
    <defs>
      <filter id="filter0_b_306_1167" x="781" y="-8" width="308" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_306_1167" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_306_1167" result="shape" />
      </filter>
      <filter id="filter1_d_306_1167" x="0" y="0" width="1866.96" height="1078.43" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1167" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1167" result="shape" />
      </filter>
      <filter id="filter2_d_306_1167" x="814.8" y="12.3438" width="240.261" height="74.7041" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1167" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1167" result="shape" />
      </filter>
    </defs>
  </svg> 

  const border2 = <svg width="1867" height="952" viewBox="0 0 1867 952" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_306_1166)">
      <path id='layout-text-bg' d="M801 36.5L834 12H1038L1069 36.5V58L1038.5 88H834L801 57.5V36.5Z" fill="black" fillOpacity="0.12" />
    </g>
    <g filter="url(#filter1_d_306_1166)">
      <path id='layout-svg' d="M13.3412 653.337L13.3408 87.6789L66.0345 35H801L833.5 11H940H1039L1069.5 35H1800.94L1853.62 87.6789L1853.62 653.337M64.479 659.546V636.296L83.8465 616.929V546.438L50.9203 513.512L50.9199 219.383M58.2845 95.4288L95.4635 58.235M95.4635 58.235H428.593M95.4635 58.235H801L833.5 88.5H940H1039L1069.5 58.235L1771.5 58.235M79.9789 846.414L122.581 889.017H643.961M81.0015 886.705L15.9346 821.623L14.5 695.568M24.1881 858.284L74.8073 908.903H363.007M44.6815 198.549L57.766 211.633M57.766 198.549L44.6815 211.633M57.0699 669.519L70.1544 682.603M70.1544 669.519L57.0699 682.603M135.413 835.197L158.5 858.284M158.5 835.197L135.413 858.284M1802.5 659.546V636.296L1783.13 616.929V546.438L1816.06 513.512L1816.06 219.383M1808.69 95.4288L1771.5 58.235M1771.5 58.235H1438.38M1787 878.011L1744.39 920.614H1223M1785.96 918.302L1851.04 853.221L1852.6 694.665M1842.77 889.881L1792.17 940.5H1503.97M1822.29 198.549L1809.21 211.634M1809.21 198.549L1822.29 211.634M1809.89 669.519L1796.81 682.603M1796.81 669.519L1809.89 682.603M1692.5 822.987L1669.43 846.074M1669.43 822.987L1692.5 846.074M11 659.62H16.6457V665.266H11V659.62ZM11 670.6H16.6457V676.246H11V670.6ZM11 681.581H16.6457V687.227H11V681.581ZM53.113 109.714H59.307V115.908H53.113V109.714ZM53.113 121.761H59.3071V127.955H53.113V121.761ZM53.113 133.823H59.3071V140.017H53.113V133.823ZM91.017 20.9876H107.539V26.5H91.017V20.9876ZM116.49 20.9876H133.012V26.5H116.49V20.9876ZM141.977 20.9876H158.5V26.5H141.977V20.9876ZM1855.96 665.266H1850.32V659.62H1855.96V665.266ZM1855.96 676.246H1850.32V670.6H1855.96V676.246ZM1855.96 687.227H1850.32V681.581H1855.96V687.227ZM1813.86 115.922H1807.67V109.728H1813.86V115.922ZM1813.86 127.97H1807.67V121.776H1813.86V127.97ZM1813.86 140.017H1807.67V133.823H1813.86V140.017ZM1433.5 26.5H1416.98V20.9876H1433.5V26.5ZM1408.03 26.5H1391.5V20.9876H1408.03V26.5ZM1382.54 26.5H1366.02V20.9876H1382.54V26.5Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" stroke-miterlimit="10" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter2_d_306_1166)">
      <path id='layout-text' d="M844.256 67.048H834.8V41.8L844.064 32.344H881.264V41.8H844.256V44.872H872V54.568H844.256V67.048ZM932.545 67.048H895.345L886.081 57.592V32.392H923.281L932.545 41.848V67.048ZM923.089 57.592V41.848H895.537V57.592H923.089ZM965.299 67.048H955.843V41.8H946.819V52.312H937.363V32.344H983.779V52.312H974.323V41.8H965.299V67.048ZM998.053 67.048H988.597V41.8L997.861 32.344H1035.06V41.8H998.053V44.872H1025.8V54.568H998.053V67.048Z" fill="#07CE02" />
    </g>
    <defs>
      <filter id="filter0_b_306_1166" x="781" y="-8" width="308" height="116" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_306_1166" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_306_1166" result="shape" />
      </filter>
      <filter id="filter1_d_306_1166" x="0" y="0" width="1866.96" height="951.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1166" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1166" result="shape" />
      </filter>
      <filter id="filter2_d_306_1166" x="814.8" y="12.3438" width="240.261" height="74.7041" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1166" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1166" result="shape" />
      </filter>
    </defs>
  </svg>

  const border3 = <svg width="1002" height="1328" viewBox="0 0 1002 1328" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_306_1171)">
      <path id='layout-text-bg' d="M367.5 36L399.5 12H605L635 36V57.5L604.5 87.5H400L367.5 57.5V36Z" fill="black" fillOpacity="0.12" />
    </g>
    <g filter="url(#filter1_d_306_1171)">
      <path id='layout-svg' d="M13.3412 1029.83L13.3408 87.679L66.0345 35.0001L367 35L399.5 11H506H605L635.5 35H935.272L987.951 87.6789L987.951 1029.83M64.479 1036.03V1012.78L83.8465 993.417V922.927L50.9203 890.001L50.9199 219.384M58.2845 95.4289L95.4635 58.2351M95.4635 58.2351H126M95.4635 58.2351L367 58.235L399.5 88.5H506H605L635.5 58.235L905.829 58.235M79.9789 1222.9L122.581 1265.51H325M81.0015 1263.19L15.9346 1198.11L14.5 1072.06M24.1881 1234.77L74.8073 1285.39H147.546M44.6815 198.549L57.766 211.634M57.766 198.549L44.6815 211.634M57.0699 1046.01L70.1544 1059.09M70.1544 1046.01L57.0699 1059.09M135.413 1211.69L158.5 1234.77M158.5 1211.69L135.413 1234.77M936.828 1036.03V1012.78L917.461 993.417V922.927L950.387 890.001L950.387 219.383M943.022 95.4288L905.829 58.235M905.829 58.235H857.831M921.329 1254.5L878.726 1297.1H736.5M920.292 1294.79L985.373 1229.71L986.929 1071.15M977.104 1266.37L926.5 1316.99H857.831M956.625 198.549L943.541 211.634M943.541 198.549L956.625 211.634M944.223 1046.01L931.138 1059.09M931.138 1046.01L944.223 1059.09M826.831 1199.48L803.759 1222.56M803.759 1199.48L826.831 1222.56M11 1036.11H16.6457V1041.75H11V1036.11ZM11 1047.09H16.6457V1052.73H11V1047.09ZM11 1058.07H16.6457V1063.72H11V1058.07ZM53.113 109.714H59.307V115.908H53.113V109.714ZM53.113 121.761H59.3071V127.955H53.113V121.761ZM53.113 133.823H59.3071V140.017H53.113V133.823ZM91.017 20.9877H107.539V26.5001H91.017V20.9877ZM116.49 20.9877H133.012V26.5001H116.49V20.9877ZM141.977 20.9877H158.5V26.5001H141.977V20.9877ZM990.293 1041.75H984.647V1036.11H990.293V1041.75ZM990.293 1052.73H984.647V1047.09H990.293V1052.73ZM990.293 1063.72H984.647V1058.07H990.293V1063.72ZM948.194 115.922H942V109.728H948.194V115.922ZM948.194 127.97H942V121.776H948.194V127.97ZM948.194 140.017H942V133.823H948.194V140.017ZM734.5 26.5H717.978V20.9876H734.5V26.5ZM709.027 26.5H692.505V20.9876H709.027V26.5ZM683.54 26.5H667.018V20.9876H683.54V26.5Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" stroke-miterlimit="10" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter2_d_306_1171)">
      <path id='layout-text' d="M412.256 68.048H402.8V42.8L412.064 33.344H449.264V42.8H412.256V45.872H440V55.568H412.256V68.048ZM500.545 68.048H463.345L454.081 58.592V33.392H491.281L500.545 42.848V68.048ZM491.089 58.592V42.848H463.537V58.592H491.089ZM533.299 68.048H523.843V42.8H514.819V53.312H505.363V33.344H551.779V53.312H542.323V42.8H533.299V68.048ZM566.053 68.048H556.597V42.8L565.861 33.344H603.061V42.8H566.053V45.872H593.797V55.568H566.053V68.048Z" fill="#07CE02" />
    </g>
    <defs>
      <filter id="filter0_b_306_1171" x="347.5" y="-8" width="307.5" height="115.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_306_1171" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_306_1171" result="shape" />
      </filter>
      <filter id="filter1_d_306_1171" x="0" y="0" width="1001.29" height="1327.99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1171" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1171" result="shape" />
      </filter>
      <filter id="filter2_d_306_1171" x="382.8" y="13.3438" width="240.261" height="74.7041" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1171" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1171" result="shape" />
      </filter>
    </defs>
  </svg>

  const border4 = <svg width="1301" height="976" viewBox="0 0 1301 976" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_344_812)">
      <path id='layout-text-bg' d="M13.3412 677.234L13.334 87.679L66.0277 35.0001L517.174 35L549.672 11H656.172H755.172L785.672 35H1234.41L1287.09 87.6789L1287.09 677.234M64.479 683.443V660.193L83.8465 640.826V570.335L50.9203 537.409L50.9131 219.384M58.2777 95.4289L95.4569 58.2351M95.4569 58.2351H125.993M95.4569 58.2351L517.174 58.235L549.672 88.5H656.172H755.172L785.672 58.235L1204.96 58.235M79.9789 870.311L122.581 912.914H476.682M81.0015 910.602L15.9346 845.52L14.5 719.465M24.1881 882.181L74.8073 932.8H285.182M44.6746 198.549L57.7591 211.634M57.7591 198.549L44.6746 211.634M57.0699 693.416L70.1544 706.5M70.1544 693.416L57.0699 706.5M135.413 859.094L158.5 882.181M158.5 859.094L135.413 882.181M1235.97 683.443V660.193L1216.6 640.825V570.335L1249.53 537.409L1249.52 219.383M1242.16 95.4288L1204.96 58.235M1204.96 58.235H1156.97M1220.47 901.908L1177.87 944.511H862.182M1219.43 942.199L1284.51 877.117L1286.07 718.562M1276.25 913.778L1225.64 964.397H978.182M1255.76 198.549L1242.68 211.634M1242.68 198.549L1255.76 211.634M1243.36 693.415L1230.28 706.5M1230.28 693.415L1243.36 706.5M1125.97 846.884L1102.9 869.97M1102.9 846.884L1125.97 869.97M11 683.517H16.6457V689.163H11V683.517ZM11 694.497H16.6457V700.143H11V694.497ZM11 705.478H16.6457V711.123H11V705.478ZM53.1061 109.714H59.3001V115.908H53.1061V109.714ZM53.1062 121.761H59.3002V127.955H53.1062V121.761ZM53.1062 133.823H59.3002V140.017H53.1062V133.823ZM91.0103 20.9877H107.533V26.5001H91.0103V20.9877ZM116.483 20.9877H133.005V26.5001H116.483V20.9877ZM141.971 20.9877H158.493V26.5001H141.971V20.9877ZM1289.43 689.163H1283.79V683.517H1289.43V689.163ZM1289.43 700.143H1283.79V694.497H1289.43V700.143ZM1289.43 711.123H1283.79V705.478H1289.43V711.123ZM1247.33 115.922H1241.14V109.728H1247.33V115.922ZM1247.33 127.97H1241.14V121.776H1247.33V127.97ZM1247.33 140.017H1241.14V133.823H1247.33V140.017ZM1175.14 26.5H1158.61V20.9876H1175.14V26.5ZM1149.66 26.5H1133.14V20.9876H1149.66V26.5ZM1124.18 26.5H1107.65V20.9876H1124.18V26.5Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" stroke-miterlimit="10" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter1_b_344_812)">
      <path id='layout-svg' d="M517.682 36L549.682 12H755.182L785.182 36V57.5L754.682 87.5H550.182L517.682 57.5V36Z" fill="black" fillOpacity="0.12" />
    </g>
    <g filter="url(#filter2_d_344_812)">
      <path id='layout-text' d="M561.938 68.048H552.482V42.8L561.746 33.344H598.946V42.8H561.938V45.872H589.682V55.568H561.938V68.048ZM650.227 68.048H613.027L603.763 58.592V33.392H640.963L650.227 42.848V68.048ZM640.771 58.592V42.848H613.219V58.592H640.771ZM682.98 68.048H673.524V42.8H664.5V53.312H655.044V33.344H701.46V53.312H692.004V42.8H682.98V68.048ZM715.735 68.048H706.279V42.8L715.543 33.344H752.743V42.8H715.735V45.872H743.479V55.568H715.735V68.048Z" fill="#07CE02" />
    </g>
    <defs>
      <filter id="filter0_d_344_812" x="0" y="0" width="1300.43" height="975.396" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_812" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_812" result="shape" />
      </filter>
      <filter id="filter1_b_344_812" x="497.682" y="-8" width="307.5" height="115.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_344_812" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_344_812" result="shape" />
      </filter>
      <filter id="filter2_d_344_812" x="532.481" y="13.3438" width="240.261" height="74.7041" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_344_812" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_344_812" result="shape" />
      </filter>
    </defs>
  </svg>

  const border5 = <svg width="1363" height="661" viewBox="0 0 1363 661" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_306_1184)">
      <path id='layout-text-bg' d="M545 35.5L577.5 12H782L813 36V57L782 87.5H577.5L545 57.5V35.5Z" fill="black" fillOpacity="0.12" />
    </g>
    <g filter="url(#filter1_d_306_1184)">
      <path id='layout-svg' d="M13.3412 362.408L13.3408 87.6789L66.0345 35H544.5L577 11H679H782.5L813 35H1296.73L1349.41 87.6789L1349.41 362.408M64.479 368.617V345.367L83.8465 326V255.51L50.9203 228L50.9199 174.3M58.2845 95.4288L95.4635 58.235M95.4635 58.235H158.5M95.4635 58.235H544.5L577 88.5H679H782.5L813 58.235L1267.29 58.235M79.9789 555.486L122.581 598.088H448M81.0015 595.776L15.9346 530.695L14.5 404.64M24.1881 567.355L74.8073 617.974H253.5M44.6815 153.465L57.766 166.55M57.766 153.465L44.6815 166.55M57.0699 378.59L70.1544 391.674M70.1544 378.59L57.0699 391.674M135.413 544.268L158.5 567.355M158.5 544.268L135.413 567.355M1298.29 368.617V345.367L1278.92 326V255.51L1311.85 228L1311.85 174.3M1304.48 95.4288L1267.29 58.235M1267.29 58.235H934.173M1282.79 587.083L1240.19 629.685H861.808M1281.75 627.374L1346.83 562.292L1348.39 403.737M1338.56 598.952L1287.96 649.571H1100.29M1318.08 153.465L1305 166.55M1305 153.465L1318.08 166.55M1305.68 378.59L1292.6 391.674M1292.6 378.59L1305.68 391.674M1188.29 532.058L1165.22 555.145M1165.22 532.058L1188.29 555.145M11 368.691H16.6457V374.337H11V368.691ZM11 379.672H16.6457V385.318H11V379.672ZM11 390.652H16.6457V396.298H11V390.652ZM53.113 109.714H59.307V115.908H53.113V109.714ZM53.113 121.761H59.3071V127.955H53.113V121.761ZM53.113 133.823H59.3071V140.017H53.113V133.823ZM91.017 20.9876H107.539V26.5H91.017V20.9876ZM116.49 20.9876H133.012V26.5H116.49V20.9876ZM141.977 20.9876H158.5V26.5H141.977V20.9876ZM1351.75 374.337H1346.11V368.691H1351.75V374.337ZM1351.75 385.317H1346.11V379.672H1351.75V385.317ZM1351.75 396.298H1346.11V390.652H1351.75V396.298ZM1309.65 115.922H1303.46V109.728H1309.65V115.922ZM1309.65 127.97H1303.46V121.776H1309.65V127.97ZM1309.65 140.017H1303.46V133.823H1309.65V140.017ZM929.29 26.5H912.768V20.9876H929.29V26.5ZM903.817 26.5H887.295V20.9876H903.817V26.5ZM878.33 26.5H861.808V20.9876H878.33V26.5Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" stroke-miterlimit="10" shapeRendering="crispEdges" />
    </g>
    <g filter="url(#filter2_d_306_1184)">
      <path id='layout-text' d="M589.256 67.048H579.8V41.8L589.064 32.344H626.264V41.8H589.256V44.872H617V54.568H589.256V67.048ZM677.545 67.048H640.345L631.081 57.592V32.392H668.281L677.545 41.848V67.048ZM668.089 57.592V41.848H640.537V57.592H668.089ZM710.299 67.048H700.843V41.8H691.819V52.312H682.363V32.344H728.779V52.312H719.323V41.8H710.299V67.048ZM743.053 67.048H733.597V41.8L742.861 32.344H780.061V41.8H743.053V44.872H770.797V54.568H743.053V67.048Z" fill="#07CE02" />
    </g>
    <defs>
      <filter id="filter0_b_306_1184" x="525" y="-8" width="308" height="115.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_306_1184" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_306_1184" result="shape" />
      </filter>
      <filter id="filter1_d_306_1184" x="0" y="0" width="1362.75" height="660.571" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1184" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1184" result="shape" />
      </filter>
      <filter id="filter2_d_306_1184" x="559.8" y="12.3438" width="240.261" height="74.7041" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_306_1184" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_306_1184" result="shape" />
      </filter>
    </defs>
  </svg>

  const border6 = <svg width="422" height="918" viewBox="0 0 422 918" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_b_669_1339)">
      <path id='layout-text-bg' d="M134 36L166.5 12H253.5L284 36V57.5L253.5 87.5H167L134 57V36Z" fill="black" fillOpacity="0.12" />
    </g>
    <g filter="url(#filter1_d_669_1339)">
      <path id='layout-svg' d="M13.3412 632.884L13.3408 87.6789L66.0345 35H134L166.5 11H210.5H254L284.5 35H355.125L407.804 87.6789L407.804 632.884M39.9171 639.093V615.843L59.2845 596.476V525.985L26.3584 493.059L26.358 219.383M40.821 95.4288L78 58.235H134L166.5 88.5H210.5H254L284.5 58.235H343.247L380.441 95.4288M79.9789 812.694L122.581 855.296L216 856.16M81.0015 852.985L15.9346 787.903L14.5 675.115M24.1881 824.563L74.8073 875.182H127M20.1196 198.549L33.2041 211.633M33.2041 198.549L20.1196 211.633M32.508 649.065L45.5925 662.15M45.5925 649.065L32.508 662.15M135.413 801.477L158.5 824.563M158.5 801.477L135.413 824.563M380.441 639.093V615.843L361.074 596.476V525.985L394 493.059L394 219.383M341.182 844.291L298.579 886.893H182.5M340.145 884.582L405.226 819.5L406.782 674.212M396.958 856.16L346.353 906.779H285.5M400.238 198.549L387.154 211.634M387.154 198.549L400.238 211.634M387.836 649.066L374.751 662.15M374.751 649.066L387.836 662.15M246.684 789.266L223.613 812.353M223.613 789.266L246.684 812.353M11 639.167H16.6457V644.813H11V639.167ZM11 650.147H16.6457V655.793H11V650.147ZM11 661.128H16.6457V666.773H11V661.128ZM28.5511 109.714H34.7451V115.908H28.5511V109.714ZM28.5511 121.761H34.7451V127.955H28.5511V121.761ZM28.5511 133.823H34.7451V140.017H28.5511V133.823ZM72.0174 20.9876H88.5398V26.5H72.0174V20.9876ZM97.4899 20.9876H114.012V26.5H97.4899V20.9876ZM410.146 644.813H404.5V639.167H410.146V644.813ZM410.146 655.793H404.5V650.147H410.146V655.793ZM410.146 666.773H404.5V661.128H410.146V666.773ZM391.807 115.922H385.613V109.728H391.807V115.922ZM391.807 127.97H385.613V121.776H391.807V127.97ZM391.807 140.017H385.613V133.823H391.807V140.017ZM330.522 26.5H314V20.9876H330.522V26.5ZM305.05 26.5H288.527V20.9876H305.05V26.5Z" stroke="#07CE02" strokeOpacity="0.22" strokeWidth="2" stroke-miterlimit="10" shapeRendering="crispEdges" />
    </g>
    <path id='layout-text' d="M154.254 56.8701H148.549V42.2528L154.138 36.7783H176.581V42.2528H154.254V44.0314H170.992V49.6448H154.254V56.8701ZM207.519 56.8701H185.076L179.487 51.3956V36.8061H201.93L207.519 42.2806V56.8701ZM201.814 51.3956V42.2806H185.192V51.3956H201.814ZM227.28 56.8701H221.575V42.2528H216.131V48.3387H210.426V36.7783H238.429V48.3387H232.724V42.2528H227.28V56.8701ZM247.04 56.8701H241.335V42.2528L246.924 36.7783H269.367V42.2528H247.04V44.0314H263.778V49.6448H247.04V56.8701Z" fill="#07CE02" />
    <defs>
      <filter id="filter0_b_669_1339" x="114" y="-8" width="190" height="115.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_669_1339" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_669_1339" result="shape" />
      </filter>
      <filter id="filter1_d_669_1339" x="0" y="0" width="421.146" height="917.779" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.027451 0 0 0 0 0.807843 0 0 0 0 0.00784314 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_669_1339" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_669_1339" result="shape" />
      </filter>
   </defs>
  </svg>


  const [bgUrl, setBgUrl] = useState(border1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setBgUrl(border6)
      }
      else if (window.innerWidth > 1400 && window.innerWidth <= 1920 && window.innerHeight > 1050 && window.innerHeight <= 1080) {
        setBgUrl(border1)
      }
      else if (window.innerWidth > 1400 && window.innerWidth <= 1920 && window.innerHeight > 900 && window.innerHeight <= 1050) {
        setBgUrl(border2)
      }
      else if (window.innerWidth >= 900 && window.innerWidth <= 1050 && window.innerHeight >= 1250 && window.innerHeight <= 1350) {
        setBgUrl(border3)
      }
      else if (window.innerWidth >= 1250 && window.innerWidth <= 1350 && window.innerHeight >= 900 && window.innerHeight <= 1050) {
        setBgUrl(border4)
      }
      else if (window.innerWidth >= 1300 && window.innerWidth <= 1400 && window.innerHeight >= 600 && window.innerHeight <= 700) {
        setBgUrl(border5)
      }
      else if(window.innerWidth > 1920){
        setBgUrl(border1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home bgUrl={bgUrl} />}></Route>
          <Route exact path="/terms" element={<Terms bgUrl={bgUrl} />}></Route>
          <Route exact path="/privacy" element={<Privacy bgUrl={bgUrl} />}></Route>
          <Route exact path="/legal" element={<Legal bgUrl={bgUrl} />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
