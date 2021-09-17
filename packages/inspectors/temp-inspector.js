let fs = require("fire-fs");
let packageName = "inspectors";

Vue.component('temp-inspector', {
    template: fs.readFileSync(Editor.url('packages://' + packageName + '/temp-inspector.html'), 'utf8'),

    props: {
        target: {
            twoWay: true,
            type: Object,
        }
    },
    methods: {
    }
});