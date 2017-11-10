<template>
  <div class="row f-layout-padding self-center justify-center">
    <div class="q-card f-layout-padding col-12" >
      <q-card-media>
        <div style="min-width:400px;height:400px" id="maps"></div>
       </q-card-media> 
    </div>
</div>
</template>
 
<script>
import Vue from 'vue'
import {
  QList,
  QItem,
  QItemTile,
  QItemSide,
  QItemMain,
  QToolbarTitle,
  QBtn,
  QIcon,
  QCard,
  QCardMedia,
  QCardTitle,
  ActionSheet
} from 'quasar'
export default {
  components: {
    QList,
    QItem,
    QItemTile,
    QItemSide,
    QItemMain,
    QToolbarTitle,
    QBtn,
    QIcon,
    QCard,
    QCardMedia,
    QCardTitle,
    ActionSheet
  },
  methods: {
    pluginEnabled: function (pluginName) {
      return this.cordova.plugins.indexOf(pluginName) !== -1
    }
  },
  data: function () {
    return {
      cordova: Vue.cordova
    }
  },
  mounted: function () {
    console.log(Vue.cordova)
    Vue.cordova.on('deviceready', () => {
      var div = document.getElementById('maps')
      var map = Vue.cordova.googlemaps.Map.getMap(div, {
        // 'mapType': Vue.cordova.googlemaps.MapTypeId.ROADMAP,
        'controls': {
          'compass': true,
          'myLocationButton': true,
          'indoorPicker': true,
          'zoom': true
        },
        'camera': {
          target: {
            lat: -20.763372,
            lng: -42.866118
          },
          zoom: 14
        },
        'gestures': {
          'scroll': true,
          'tilt': true,
          'rotate': true,
          'zoom': true
        }
      })
      map.addEventListener(Vue.cordova.googlemaps.event.MAP_READY, function () {
        var encode = 'zpl}BtasdGYE'
        var pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = '`pl}BnasdGAPAJANCLCFEFCDC@EBE@GBEBEBGDGDEDEDEBCDCDCFADQ\\CFGDEFEDEDIDIDGBIBODI@G@K@KBM@O@K@GBKBK@IDIBCBEBEDCBAFCDCP'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'hdl}BzksdG?NFt@~@[ZKtBw@DCbBq@d@O`@KPAP?N?TBPBTDPDPDPHTLRJlBv@\\NVJTJTJPJ`@PTLRJRFRFv@V^DTDV@X?RAPAJA`@EXIZM\\Qf@Wr@_@tCmB|@g@t@c@r@a@vAq@ZMVK^GJCFAJCJCLAD?DAdFIhHSZAXAXAXAdBCpAE|@CL?N?d@Ad@ChAAhACnEKpDIZ?nAEhDIxDIdAG|@Cl@E|@IbAGnBSl@G^EbCS~BUfDYjD_@rD[ZCRCp@Cr@ENANCHAHA`CYPAP?NAH?P?PAF?P@P?N@P?P@P@N@H?P@H@P@J@@@fARzHtBRLvA`@rA\\lBd@'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'vor}Bt`sdGNDr@RdAVT@LDzB`AH@HBF@FBND`@T^Th@^fHnFz@p@n@d@ZXNLFF'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'dft}BdhtdG?B@@?@@@@@?@@?@??@@?@?@?@?@?d@t@^h@JRHJ@DFH@DFHNf@HTDL@BLx@@PDt@@z@?h@?HAP?NAPWhEC^C\\AN?F?NAN?L?N?F@N?F?N@N@F@L@N@NBL@F@FBNBLBLBJDL@DDLDJ@DBDBFDJDHDHDDHNHLBBBFRRHHFHRT@@@@LL`@^JHt@n@`@ZBB'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'fut}BpuudGOd@OZABCB'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = '`tt}BzwudG@B@FBBBFFFFDB@B@D@FAn@aAXWLKVS'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'byt}BjuudGFEGc@?ECc@?K'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = '~xt}BjrudGAY?g@rBsCBCFGDGDIDGNYLSLSDINSLSFILQR[p@aAh@e@@?@?@?@??A@?@?@A@A@A@A?A@??A?A?A?A?A@?AA?A?A?A?AA??AAANc@BQ?Q?OAQCSISEMEMEOCOAOAK@MBMFOfAyA|CoE?@@?@??A@?@??A@??A?A?A?A?A`AqAhEyFNSDInBmCrAeB@?@?@??A@?@?@A@??A@??A@??A@??A?A@??A?A?A?A@??A?AAA?A?ABCb@q@f@o@fA}Aj@s@BCrAmBFM?@@?@?@?@?@?@?@A@?@A@??A@??A@A?A@??A?A?A@??A?A?A?AAA?A?AAAXa@~DqFPS'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'bmv}BldsdG@?@?@?@??A@?@?@A@??A@??A?A@??A?A@A?A?A?A?AAA?A?AA??AA??AAAA??AA?A?A?A?A?A?A?A??@A?A??@A??@A@?@A??@?@?@?@?@?@?@sEdGIL'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
        encode = 'zpl}BtasdGYEAPCZQb@s@^UT[p@WZa@Tk@Lu@Hk@J]POVC`@Ft@~@[pCcAhBu@fA[b@Ad@Bf@Hb@Jf@VvD~A~At@h@Xf@Nv@V^Dl@FjAEz@Ox@_@zAw@rEuChBeArB_AjAYj@IpPa@rDIlKUlN[bJSbCK~Gk@lAMbGi@rIy@nE_@hCOdDa@|@C|@?dABfBLfARzHtBRLvA`@`EbAbAXdAVT@hCfAb@Jp@ZhAt@nL`JjBxAbKxHRXTRNTf@`@tA|@|B~A^TLD?B@BBB@@@@F?fA~A^n@b@lAFPNjAFpB?r@[|FItAA|@HdBHl@Nv@b@lAZh@d@l@f@j@|@x@vAjABBOd@Q^AFPZTJFAn@aAf@c@^YGi@EqBdCgDzAeCzAyBl@e@DAJI?OCGRu@?a@Ee@[_AE_@?YJ]dFiH@@BA@A@E?A?A`HiJdEsFFADEFOAEf@w@nBmCn@w@zA{B@@B?B?DAHM?OVc@pEeG@?D?HEBKAKIGK?GDCJ?B}EtG'
        pontos = Vue.cordova.googlemaps.geometry.encoding.decodePath(encode)
        console.log(pontos)
        map.addPolyline({
          'points': pontos
        })
      })
    })
  }
}
</script> 

<style scoped>
  .f-layout-padding {
    padding: 10px; 
  }
  .google-map {
    min-width: 300px;
    height: 300px;
    margin: 0 auto;
    background: gray;
  }
</style>
