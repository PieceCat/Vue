import Vue from 'vue'
import moment from 'moment'
Vue.filter('fmtdate', function(input, format) {
    return moment(input).format(format)
})