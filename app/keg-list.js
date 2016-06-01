System.register(['angular2/core', './singleKeg', './empty.pipe', './edit-keg-details'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, singleKeg_1, empty_pipe_1, edit_keg_details_1;
    var KegListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (singleKeg_1_1) {
                singleKeg_1 = singleKeg_1_1;
            },
            function (empty_pipe_1_1) {
                empty_pipe_1 = empty_pipe_1_1;
            },
            function (edit_keg_details_1_1) {
                edit_keg_details_1 = edit_keg_details_1_1;
            }],
        execute: function() {
            KegListComponent = (function () {
                function KegListComponent() {
                    this.filterLow = 'all';
                    this.onKegSelect = new core_1.EventEmitter();
                }
                KegListComponent.prototype.kegClicked = function (clickedKeg) {
                    this.selectedKeg = clickedKeg;
                    this.onKegSelect.emit(clickedKeg);
                };
                KegListComponent.prototype.onChange = function (filterOption) {
                    this.filterLow = filterOption;
                    console.log(this.filterLow);
                };
                ;
                KegListComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-list',
                        inputs: ['kegList'],
                        pipes: [empty_pipe_1.EmptyPipe],
                        directives: [singleKeg_1.SingleKegComponent, edit_keg_details_1.EditKegDetailsComponent],
                        template: "\n  <select (change)='onChange($event.target.value)' class ='filter'>\n  <option value=\"all\">Show All</option>\n  <option value=\"low\">Show Low Kegs</option>\n  </select>\n  <div class = 'row'>\n  <h3 class = 'col-xs-2'>Name:</h3>\n  <h3 class = 'col-xs-2'>Brand:</h3>\n  <h3 class = 'col-xs-2'>Price:</h3>\n  <h3 class = 'col-xs-2'>ABV:</h3>\n  <h3 class = 'col-xs-2'>Pints:</h3>\n  </div>\n  <keg-display\n  *ngFor = '#currentKeg of kegList | empty:filterLow'\n  (click)='kegClicked(currentKeg)'\n  [class.selected]='currentKeg === selectedKeg'\n  [keg]='currentKeg'>\n  </keg-display>\n  <edit-keg-details *ngIf='selectedKeg' [keg]='selectedKeg'>\n  </edit-keg-details>\n\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegListComponent);
                return KegListComponent;
            }());
            exports_1("KegListComponent", KegListComponent);
        }
    }
});
//# sourceMappingURL=keg-list.js.map