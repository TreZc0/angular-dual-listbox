import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class BasicList {
    constructor(name) {
        this._name = name;
        this.last = null;
        this.picker = '';
        this.dragStart = false;
        this.dragOver = false;
        // Arrays will contain objects of { _id, _name }.
        this.pick = [];
        this.list = [];
        this.sift = [];
    }
    get name() {
        return this._name;
    }
}

function DualListComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11)(1, "input", 12);
    i0.ɵɵlistener("ngModelChange", function DualListComponent_form_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.available.picker = $event; })("ngModelChange", function DualListComponent_form_4_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onFilter(ctx_r6.available); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.available.picker);
} }
const _c0 = function (a0, a1) { return { selected: a0, disabled: a1 }; };
function DualListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13);
    i0.ɵɵlistener("click", function DualListComponent_li_7_Template_li_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r7 = restoredCtx.$implicit; const idx_r8 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(); ctx_r9.disabled ? null : ctx_r9.selectItem(ctx_r9.available.pick, item_r7); return ctx_r9.shiftClick($event, idx_r8, ctx_r9.available, item_r7); })("dragstart", function DualListComponent_li_7_Template_li_dragstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r7 = restoredCtx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.drag($event, item_r7, ctx_r11.available); })("dragend", function DualListComponent_li_7_Template_li_dragend_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.dragEnd(ctx_r12.available); });
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r1.isItemSelected(ctx_r1.available.pick, item_r7), ctx_r1.disabled))("draggable", !ctx_r1.disabled && ctx_r1.format.draggable);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7._name);
} }
function DualListComponent_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11)(1, "input", 14);
    i0.ɵɵlistener("ngModelChange", function DualListComponent_form_16_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.confirmed.picker = $event; })("ngModelChange", function DualListComponent_form_16_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onFilter(ctx_r15.confirmed); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r2.confirmed.picker);
} }
function DualListComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 13, 15);
    i0.ɵɵlistener("click", function DualListComponent_li_19_Template_li_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r20); const item_r16 = restoredCtx.$implicit; const idx_r17 = restoredCtx.index; const ctx_r19 = i0.ɵɵnextContext(); ctx_r19.disabled ? null : ctx_r19.selectItem(ctx_r19.confirmed.pick, item_r16); return ctx_r19.shiftClick($event, idx_r17, ctx_r19.confirmed, item_r16); })("dragstart", function DualListComponent_li_19_Template_li_dragstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r20); const item_r16 = restoredCtx.$implicit; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.drag($event, item_r16, ctx_r21.confirmed); })("dragend", function DualListComponent_li_19_Template_li_dragend_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.dragEnd(ctx_r22.confirmed); });
    i0.ɵɵelementStart(2, "label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx_r3.isItemSelected(ctx_r3.confirmed.pick, item_r16), ctx_r3.disabled))("draggable", !ctx_r3.disabled && ctx_r3.format.draggable);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r16._name);
} }
const _c1 = function (a0, a1) { return { "order": a0, "margin-left": a1 }; };
const _c2 = function (a0, a1) { return { "max-height": a0, "min-height": a1 }; };
const _c3 = function (a0) { return { over: a0 }; };
var nextId = 0;
class DualListComponent {
    constructor(differs) {
        this.differs = differs;
        this.id = `dual-list-${nextId++}`;
        this.key = '_id';
        this.display = '_name';
        this.height = '100px';
        this.filter = false;
        this.format = DualListComponent.DEFAULT_FORMAT;
        this.sort = false;
        this.disabled = false;
        this.destinationChange = new EventEmitter();
        this.sorter = (a, b) => { return (a._name < b._name) ? -1 : ((a._name > b._name) ? 1 : 0); };
        this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
        this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
    }
    ngOnChanges(changeRecord) {
        if (changeRecord['filter']) {
            if (changeRecord['filter'].currentValue === false) {
                this.clearFilter(this.available);
                this.clearFilter(this.confirmed);
            }
        }
        if (changeRecord['sort']) {
            if (changeRecord['sort'].currentValue === true && this.compare === undefined) {
                this.compare = this.sorter;
            }
            else if (changeRecord['sort'].currentValue === false) {
                this.compare = undefined;
            }
        }
        if (changeRecord['format']) {
            this.format = changeRecord['format'].currentValue;
            if (typeof (this.format.direction) === 'undefined') {
                this.format.direction = DualListComponent.LTR;
            }
            if (typeof (this.format.add) === 'undefined') {
                this.format.add = DualListComponent.DEFAULT_FORMAT.add;
            }
            if (typeof (this.format.remove) === 'undefined') {
                this.format.remove = DualListComponent.DEFAULT_FORMAT.remove;
            }
            if (typeof (this.format.all) === 'undefined') {
                this.format.all = DualListComponent.DEFAULT_FORMAT.all;
            }
            if (typeof (this.format.none) === 'undefined') {
                this.format.none = DualListComponent.DEFAULT_FORMAT.none;
            }
            if (typeof (this.format.draggable) === 'undefined') {
                this.format.draggable = DualListComponent.DEFAULT_FORMAT.draggable;
            }
        }
        if (changeRecord['source']) {
            this.available = new BasicList(DualListComponent.AVAILABLE_LIST_NAME);
            this.updatedSource();
            this.updatedDestination();
        }
        if (changeRecord['destination']) {
            this.confirmed = new BasicList(DualListComponent.CONFIRMED_LIST_NAME);
            this.updatedDestination();
            this.updatedSource();
        }
    }
    ngDoCheck() {
        if (this.source && this.buildAvailable(this.source)) {
            this.onFilter(this.available);
        }
        if (this.destination && this.buildConfirmed(this.destination)) {
            this.onFilter(this.confirmed);
        }
    }
    buildAvailable(source) {
        const sourceChanges = this.sourceDiffer.diff(source);
        if (sourceChanges) {
            sourceChanges.forEachRemovedItem((r) => {
                const idx = this.findItemIndex(this.available.list, r.item, this.key);
                if (idx !== -1) {
                    this.available.list.splice(idx, 1);
                }
            });
            sourceChanges.forEachAddedItem((r) => {
                // Do not add duplicates even if source has duplicates.
                if (this.findItemIndex(this.available.list, r.item, this.key) === -1) {
                    this.available.list.push({ _id: this.makeId(r.item), _name: this.makeName(r.item) });
                }
            });
            if (this.compare !== undefined) {
                this.available.list.sort(this.compare);
            }
            this.available.sift = this.available.list;
            return true;
        }
        return false;
    }
    buildConfirmed(destination) {
        let moved = false;
        const destChanges = this.destinationDiffer.diff(destination);
        if (destChanges) {
            destChanges.forEachRemovedItem((r) => {
                const idx = this.findItemIndex(this.confirmed.list, r.item, this.key);
                if (idx !== -1) {
                    if (!this.isItemSelected(this.confirmed.pick, this.confirmed.list[idx])) {
                        this.selectItem(this.confirmed.pick, this.confirmed.list[idx]);
                    }
                    this.moveItem(this.confirmed, this.available, this.confirmed.list[idx], false);
                    moved = true;
                }
            });
            destChanges.forEachAddedItem((r) => {
                const idx = this.findItemIndex(this.available.list, r.item, this.key);
                if (idx !== -1) {
                    if (!this.isItemSelected(this.available.pick, this.available.list[idx])) {
                        this.selectItem(this.available.pick, this.available.list[idx]);
                    }
                    this.moveItem(this.available, this.confirmed, this.available.list[idx], false);
                    moved = true;
                }
            });
            if (this.compare !== undefined) {
                this.confirmed.list.sort(this.compare);
            }
            this.confirmed.sift = this.confirmed.list;
            if (moved) {
                this.trueUp();
            }
            return true;
        }
        return false;
    }
    updatedSource() {
        this.available.list.length = 0;
        this.available.pick.length = 0;
        if (this.source !== undefined) {
            this.sourceDiffer = this.differs.find(this.source).create(null);
        }
    }
    updatedDestination() {
        if (this.destination !== undefined) {
            this.destinationDiffer = this.differs.find(this.destination).create(null);
        }
    }
    direction() {
        return this.format.direction === DualListComponent.LTR;
    }
    dragEnd(list = null) {
        if (list) {
            list.dragStart = false;
        }
        else {
            this.available.dragStart = false;
            this.confirmed.dragStart = false;
        }
        return false;
    }
    drag(event, item, list) {
        if (!this.isItemSelected(list.pick, item)) {
            this.selectItem(list.pick, item);
        }
        list.dragStart = true;
        // Set a custom type to be this dual-list's id.
        event.dataTransfer.setData(this.id, item['_id']);
    }
    allowDrop(event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            if (!list.dragStart) {
                list.dragOver = true;
            }
        }
        return false;
    }
    dragLeave() {
        this.available.dragOver = false;
        this.confirmed.dragOver = false;
    }
    drop(event, list) {
        if (event.dataTransfer.types.length && (event.dataTransfer.types[0] === this.id)) {
            event.preventDefault();
            this.dragLeave();
            this.dragEnd();
            if (list === this.available) {
                this.moveItem(this.available, this.confirmed);
            }
            else {
                this.moveItem(this.confirmed, this.available);
            }
        }
    }
    trueUp() {
        let changed = false;
        // Clear removed items.
        let pos = this.destination.length;
        while ((pos -= 1) >= 0) {
            const mv = this.confirmed.list.filter(conf => {
                if (typeof this.destination[pos] === 'object') {
                    return conf._id === this.destination[pos][this.key];
                }
                else {
                    return conf._id === this.destination[pos];
                }
            });
            if (mv.length === 0) {
                // Not found so remove.
                this.destination.splice(pos, 1);
                changed = true;
            }
        }
        // Push added items.
        for (let i = 0, len = this.confirmed.list.length; i < len; i += 1) {
            let mv = this.destination.filter((d) => {
                if (typeof d === 'object') {
                    return (d[this.key] === this.confirmed.list[i]._id);
                }
                else {
                    return (d === this.confirmed.list[i]._id);
                }
            });
            if (mv.length === 0) {
                // Not found so add.
                mv = this.source.filter((o) => {
                    if (typeof o === 'object') {
                        return (o[this.key] === this.confirmed.list[i]._id);
                    }
                    else {
                        return (o === this.confirmed.list[i]._id);
                    }
                });
                if (mv.length > 0) {
                    this.destination.push(mv[0]);
                    changed = true;
                }
            }
        }
        if (changed) {
            this.destinationChange.emit(this.destination);
        }
    }
    findItemIndex(list, item, key = '_id') {
        let idx = -1;
        function matchObject(e) {
            if (e._id === item[key]) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        function match(e) {
            if (e._id === item) {
                idx = list.indexOf(e);
                return true;
            }
            return false;
        }
        // Assumption is that the arrays do not have duplicates.
        if (typeof item === 'object') {
            list.filter(matchObject);
        }
        else {
            list.filter(match);
        }
        return idx;
    }
    makeUnavailable(source, item) {
        const idx = source.list.indexOf(item);
        if (idx !== -1) {
            source.list.splice(idx, 1);
        }
    }
    moveItem(source, target, item = null, trueup = true) {
        let i = 0;
        let len = source.pick.length;
        if (item) {
            i = source.list.indexOf(item);
            len = i + 1;
        }
        for (; i < len; i += 1) {
            // Is the pick still in list?
            let mv = [];
            if (item) {
                const idx = this.findItemIndex(source.pick, item);
                if (idx !== -1) {
                    mv[0] = source.pick[idx];
                }
            }
            else {
                mv = source.list.filter(src => {
                    return (src._id === source.pick[i]._id);
                });
            }
            // Should only ever be 1
            if (mv.length === 1) {
                // Add if not already in target.
                if (target.list.filter(trg => trg._id === mv[0]._id).length === 0) {
                    target.list.push(mv[0]);
                }
                this.makeUnavailable(source, mv[0]);
            }
        }
        if (this.compare !== undefined) {
            target.list.sort(this.compare);
        }
        source.pick.length = 0;
        // Update destination
        if (trueup) {
            this.trueUp();
        }
        // Delay ever-so-slightly to prevent race condition.
        setTimeout(() => {
            this.onFilter(source);
            this.onFilter(target);
        }, 10);
    }
    isItemSelected(list, item) {
        if (list.filter(e => Object.is(e, item)).length > 0) {
            return true;
        }
        return false;
    }
    shiftClick(event, index, source, item) {
        if (event.shiftKey && source.last && !Object.is(item, source.last)) {
            const idx = source.sift.indexOf(source.last);
            if (index > idx) {
                for (let i = (idx + 1); i < index; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
            else if (idx !== -1) {
                for (let i = (index + 1); i < idx; i += 1) {
                    this.selectItem(source.pick, source.sift[i]);
                }
            }
        }
        source.last = item;
    }
    selectItem(list, item) {
        const pk = list.filter((e) => {
            return Object.is(e, item);
        });
        if (pk.length > 0) {
            // Already in list, so deselect.
            for (let i = 0, len = pk.length; i < len; i += 1) {
                const idx = list.indexOf(pk[i]);
                if (idx !== -1) {
                    list.splice(idx, 1);
                }
            }
        }
        else {
            list.push(item);
        }
    }
    selectAll(source) {
        source.pick.length = 0;
        source.pick = source.sift.slice(0);
    }
    selectNone(source) {
        source.pick.length = 0;
    }
    isAllSelected(source) {
        if (source.list.length === 0 || source.list.length === source.pick.length) {
            return true;
        }
        return false;
    }
    isAnySelected(source) {
        if (source.pick.length > 0) {
            return true;
        }
        return false;
    }
    unpick(source) {
        for (let i = source.pick.length - 1; i >= 0; i -= 1) {
            if (source.sift.indexOf(source.pick[i]) === -1) {
                source.pick.splice(i, 1);
            }
        }
    }
    clearFilter(source) {
        if (source) {
            source.picker = '';
            this.onFilter(source);
        }
    }
    onFilter(source) {
        if (source.picker.length > 0) {
            try {
                const filtered = source.list.filter((item) => {
                    if (Object.prototype.toString.call(item) === '[object Object]') {
                        if (item._name !== undefined) {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return item._name.toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                        }
                        else {
                            // @ts-ignore: remove when d.ts has locale as an argument.
                            return JSON.stringify(item).toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                        }
                    }
                    else {
                        // @ts-ignore: remove when d.ts has locale as an argument.
                        return item.toLocaleLowerCase(this.format.locale).indexOf(source.picker.toLocaleLowerCase(this.format.locale)) !== -1;
                    }
                });
                source.sift = filtered;
                this.unpick(source);
            }
            catch (e) {
                if (e instanceof RangeError) {
                    this.format.locale = undefined;
                }
                source.sift = source.list;
            }
        }
        else {
            source.sift = source.list;
        }
    }
    makeId(item) {
        if (typeof item === 'object') {
            return item[this.key];
        }
        else {
            return item;
        }
    }
    // Allow for complex names by passing an array of strings.
    // Example: [display]="[ '_type.substring(0,1)', '_name' ]"
    makeName(item, separator = '_') {
        const display = this.display;
        function fallback(itm) {
            switch (Object.prototype.toString.call(itm)) {
                case '[object Number]':
                    return itm;
                case '[object String]':
                    return itm;
                default:
                    if (itm !== undefined) {
                        return itm[display];
                    }
                    else {
                        return 'undefined';
                    }
            }
        }
        let str = '';
        if (this.display !== undefined) {
            switch (Object.prototype.toString.call(this.display)) {
                case '[object Function]':
                    str = this.display(item);
                    break;
                case '[object Array]':
                    for (let i = 0, len = this.display.length; i < len; i += 1) {
                        if (str.length > 0) {
                            str = str + separator;
                        }
                        if (this.display[i].indexOf('.') === -1) {
                            // Simple, just add to string.
                            str = str + item[this.display[i]];
                        }
                        else {
                            // Complex, some action needs to be performed
                            const parts = this.display[i].split('.');
                            const s = item[parts[0]];
                            if (s) {
                                // Use brute force
                                if (parts[1].indexOf('substring') !== -1) {
                                    const nums = (parts[1].substring(parts[1].indexOf('(') + 1, parts[1].indexOf(')'))).split(',');
                                    switch (nums.length) {
                                        case 1:
                                            str = str + s.substring(parseInt(nums[0], 10));
                                            break;
                                        case 2:
                                            str = str + s.substring(parseInt(nums[0], 10), parseInt(nums[1], 10));
                                            break;
                                        default:
                                            str = str + s;
                                            break;
                                    }
                                }
                                else {
                                    // method not approved, so just add s.
                                    str = str + s;
                                }
                            }
                        }
                    }
                    break;
                default:
                    str = fallback(item);
                    break;
            }
        }
        else {
            str = fallback(item);
        }
        return str;
    }
}
DualListComponent.AVAILABLE_LIST_NAME = 'available';
DualListComponent.CONFIRMED_LIST_NAME = 'confirmed';
DualListComponent.LTR = 'left-to-right';
DualListComponent.RTL = 'right-to-left';
DualListComponent.DEFAULT_FORMAT = {
    add: 'Add',
    remove: 'Remove',
    all: 'All',
    none: 'None',
    direction: DualListComponent.LTR,
    draggable: true,
    locale: undefined
};
DualListComponent.ɵfac = function DualListComponent_Factory(t) { return new (t || DualListComponent)(i0.ɵɵdirectiveInject(i0.IterableDiffers)); };
DualListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DualListComponent, selectors: [["dual-list"]], inputs: { id: "id", key: "key", display: "display", height: "height", filter: "filter", format: "format", sort: "sort", compare: "compare", disabled: "disabled", source: "source", destination: "destination" }, outputs: { destinationChange: "destinationChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 25, vars: 40, consts: [[1, "dual-list"], [1, "listbox", 3, "ngStyle"], ["type", "button", "name", "addBtn", 1, "btn", "btn-primary", "btn-block", 3, "ngClass", "disabled", "click"], ["class", "filter", 4, "ngIf"], [1, "record-picker"], [3, "ngStyle", "ngClass", "drop", "dragover", "dragleave"], [3, "ngClass", "draggable", "click", "dragstart", "dragend", 4, "ngFor", "ngForOf"], [1, "button-bar"], ["type", "button", 1, "btn", "btn-primary", "pull-left", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "pull-right", 3, "disabled", "click"], ["type", "button", "name", "removeBtn", 1, "btn", "btn-primary", "btn-block", 3, "ngClass", "disabled", "click"], [1, "filter"], ["name", "filterSource", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngClass", "draggable", "click", "dragstart", "dragend"], ["name", "filterDestination", 1, "form-control", 3, "ngModel", "ngModelChange"], ["itmConf", ""]], template: function DualListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_2_listener() { return ctx.moveItem(ctx.available, ctx.confirmed); });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, DualListComponent_form_4_Template, 2, 1, "form", 3);
        i0.ɵɵelementStart(5, "div", 4)(6, "ul", 5);
        i0.ɵɵlistener("drop", function DualListComponent_Template_ul_drop_6_listener($event) { return ctx.drop($event, ctx.confirmed); })("dragover", function DualListComponent_Template_ul_dragover_6_listener($event) { return ctx.allowDrop($event, ctx.available); })("dragleave", function DualListComponent_Template_ul_dragleave_6_listener() { return ctx.dragLeave(); });
        i0.ɵɵtemplate(7, DualListComponent_li_7_Template, 3, 6, "li", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_9_listener() { return ctx.selectAll(ctx.available); });
        i0.ɵɵtext(10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 9);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_11_listener() { return ctx.selectNone(ctx.available); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(13, "div", 1)(14, "button", 10);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_14_listener() { return ctx.moveItem(ctx.confirmed, ctx.available); });
        i0.ɵɵtext(15);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, DualListComponent_form_16_Template, 2, 1, "form", 3);
        i0.ɵɵelementStart(17, "div", 4)(18, "ul", 5);
        i0.ɵɵlistener("drop", function DualListComponent_Template_ul_drop_18_listener($event) { return ctx.drop($event, ctx.available); })("dragover", function DualListComponent_Template_ul_dragover_18_listener($event) { return ctx.allowDrop($event, ctx.confirmed); })("dragleave", function DualListComponent_Template_ul_dragleave_18_listener() { return ctx.dragLeave(); });
        i0.ɵɵtemplate(19, DualListComponent_li_19_Template, 4, 6, "li", 6);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(20, "div", 7)(21, "button", 8);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_21_listener() { return ctx.selectAll(ctx.confirmed); });
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 9);
        i0.ɵɵlistener("click", function DualListComponent_Template_button_click_23_listener() { return ctx.selectNone(ctx.confirmed); });
        i0.ɵɵtext(24);
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(24, _c1, ctx.direction() ? 1 : 2, ctx.direction() ? 0 : "10px"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.direction() ? "point-right" : "point-left")("disabled", ctx.available.pick.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.add);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(27, _c2, ctx.height, ctx.height))("ngClass", i0.ɵɵpureFunction1(30, _c3, ctx.available.dragOver));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.available.sift);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled || ctx.isAllSelected(ctx.available));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.all);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.isAnySelected(ctx.available));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.none);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(32, _c1, ctx.direction() ? 2 : 1, ctx.direction() ? "10px" : 0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.direction() ? "point-left" : "point-right")("disabled", ctx.confirmed.pick.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.remove);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.filter);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(35, _c2, ctx.height, ctx.height))("ngClass", i0.ɵɵpureFunction1(38, _c3, ctx.confirmed.dragOver));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.confirmed.sift);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled || ctx.isAllSelected(ctx.confirmed));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.all);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", !ctx.isAnySelected(ctx.confirmed));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.format.none);
    } }, directives: [i1.NgStyle, i1.NgClass, i1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf], styles: ["div.record-picker[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-button{width:0px;height:0px}div.record-picker[_ngcontent-%COMP%]{scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0 0 1px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{background-color:#d9edf7}.record-picker[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover{background-color:#c4e3f3}.record-picker[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{opacity:.5;cursor:default;background-color:inherit}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.record-picker[_ngcontent-%COMP%]   ul.over[_ngcontent-%COMP%]{background-color:#d3d3d3}.dual-list[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:flex-start}.dual-list[_ngcontent-%COMP%]   .listbox[_ngcontent-%COMP%]{width:50%;margin:0}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]{margin-top:8px}.point-right[_ngcontent-%COMP%]:after{content:\"\\25b6\";padding-left:1em}.point-left[_ngcontent-%COMP%]:before{content:\"\\25c0\";padding-right:1em}.dual-list[_ngcontent-%COMP%]   .button-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:47%}button.btn-block[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:8px}.filter[_ngcontent-%COMP%]{margin-bottom:-2.2em}.filter[_ngcontent-%COMP%]:after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DualListComponent, [{
        type: Component,
        args: [{ selector: 'dual-list', template: "<div class=\"dual-list\">\r\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' :  direction() ? 1 : 2, 'margin-left' : direction() ? 0 : '10px' }\">\r\n\t\t<button type=\"button\" name=\"addBtn\" class=\"btn btn-primary btn-block\"\r\n\t\t\t(click)=\"moveItem(available, confirmed)\" [ngClass]=\"direction() ? 'point-right' : 'point-left'\"\r\n\t\t\t[disabled]=\"available.pick.length === 0\">{{format.add}}</button>\r\n\r\n\t\t<form *ngIf=\"filter\" class=\"filter\">\r\n\t\t\t<input class=\"form-control\" name=\"filterSource\" [(ngModel)]=\"available.picker\" (ngModelChange)=\"onFilter(available)\">\r\n\t\t</form>\r\n\r\n\t\t<div class=\"record-picker\">\r\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:available.dragOver}\"\r\n\t\t\t\t(drop)=\"drop($event, confirmed)\" (dragover)=\"allowDrop($event, available)\" (dragleave)=\"dragLeave()\">\r\n\t\t\t\t<li *ngFor=\"let item of available.sift; let idx=index;\"\r\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(available.pick, item); shiftClick($event, idx, available, item)\"\r\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(available.pick, item), disabled: disabled}\"\r\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, available)\" (dragend)=\"dragEnd(available)\"\r\n\t\t\t\t><label>{{item._name}}</label></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"button-bar\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(available)\"\r\n\t\t\t\t[disabled]=\"disabled || isAllSelected(available)\">{{format.all}}</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(available)\"\r\n\t\t\t\t[disabled]=\"!isAnySelected(available)\">{{format.none}}</button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"listbox\" [ngStyle]=\"{ 'order' : direction() ? 2 : 1, 'margin-left' : direction() ? '10px' : 0 }\">\r\n\t\t<button type=\"button\" name=\"removeBtn\" class=\"btn btn-primary btn-block\"\r\n\t\t\t(click)=\"moveItem(confirmed, available)\" [ngClass]=\"direction() ? 'point-left' : 'point-right'\"\r\n\t\t\t[disabled]=\"confirmed.pick.length === 0\">{{format.remove}}</button>\r\n\r\n\t\t<form *ngIf=\"filter\" class=\"filter\">\r\n\t\t\t<input class=\"form-control\" name=\"filterDestination\" [(ngModel)]=\"confirmed.picker\" (ngModelChange)=\"onFilter(confirmed)\">\r\n\t\t</form>\r\n\r\n\t\t<div class=\"record-picker\">\r\n\t\t\t<ul [ngStyle]=\"{'max-height': height, 'min-height': height}\" [ngClass]=\"{over:confirmed.dragOver}\"\r\n\t\t\t\t(drop)=\"drop($event, available)\" (dragover)=\"allowDrop($event, confirmed)\" (dragleave)=\"dragLeave()\">\r\n\t\t\t\t<li #itmConf *ngFor=\"let item of confirmed.sift; let idx=index;\"\r\n\t\t\t\t\t(click)=\"disabled ? null : selectItem(confirmed.pick, item); shiftClick($event, idx, confirmed, item)\"\r\n\t\t\t\t\t[ngClass]=\"{selected: isItemSelected(confirmed.pick, item), disabled: disabled}\"\r\n\t\t\t\t\t[draggable]=\"!disabled && format.draggable\" (dragstart)=\"drag($event, item, confirmed)\" (dragend)=\"dragEnd(confirmed)\"\r\n\t\t\t\t><label>{{item._name}}</label></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"button-bar\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-primary pull-left\" (click)=\"selectAll(confirmed)\"\r\n\t\t\t\t[disabled]=\"disabled || isAllSelected(confirmed)\">{{format.all}}</button>\r\n\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" (click)=\"selectNone(confirmed)\"\r\n\t\t\t\t[disabled]=\"!isAnySelected(confirmed)\">{{format.none}}</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", styles: ["div.record-picker{overflow-x:hidden;overflow-y:auto;border:1px solid #ddd;border-radius:8px;position:relative;cursor:pointer}div.record-picker::-webkit-scrollbar{width:12px}div.record-picker::-webkit-scrollbar-button{width:0px;height:0px}div.record-picker{scrollbar-base-color:#337ab7;scrollbar-3dlight-color:#337ab7;scrollbar-highlight-color:#337ab7;scrollbar-track-color:#eee;scrollbar-arrow-color:gray;scrollbar-shadow-color:gray;scrollbar-dark-shadow-color:gray}div.record-picker::-webkit-scrollbar-track{background:#eee;box-shadow:0 0 3px #dfdfdf inset;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb{background:#337ab7;border:thin solid gray;border-top-right-radius:8px;border-bottom-right-radius:8px}div.record-picker::-webkit-scrollbar-thumb:hover{background:#286090}.record-picker ul{margin:0;padding:0 0 1px}.record-picker li{border-top:thin solid #ddd;border-bottom:1px solid #ddd;display:block;padding:2px 2px 2px 10px;margin-bottom:-1px;font-size:.85em;cursor:pointer;white-space:nowrap;min-height:16px}.record-picker li:hover{background-color:#f5f5f5}.record-picker li.selected{background-color:#d9edf7}.record-picker li.selected:hover{background-color:#c4e3f3}.record-picker li.disabled{opacity:.5;cursor:default;background-color:inherit}.record-picker li:first-child{border-top-left-radius:8px;border-top-right-radius:8px;border-top:none}.record-picker li:last-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-bottom:none}.record-picker label{cursor:pointer;font-weight:inherit;font-size:14px;padding:4px;margin-bottom:-1px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.record-picker ul.over{background-color:#d3d3d3}.dual-list{display:flex;flex-direction:row;align-content:flex-start}.dual-list .listbox{width:50%;margin:0}.dual-list .button-bar{margin-top:8px}.point-right:after{content:\"\\25b6\";padding-left:1em}.point-left:before{content:\"\\25c0\";padding-right:1em}.dual-list .button-bar button{width:47%}button.btn-block{display:block;width:100%;margin-bottom:8px}.filter{margin-bottom:-2.2em}.filter:after{content:\"o\";width:40px;color:transparent;font-size:2em;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M0 64l192 192v192l128-32V256L512 64H0z\"/></svg>');background-repeat:no-repeat;background-position:center center;opacity:.2;top:-36px;left:calc(100% - 21px);position:relative}\n"] }]
    }], function () { return [{ type: i0.IterableDiffers }]; }, { id: [{
            type: Input
        }], key: [{
            type: Input
        }], display: [{
            type: Input
        }], height: [{
            type: Input
        }], filter: [{
            type: Input
        }], format: [{
            type: Input
        }], sort: [{
            type: Input
        }], compare: [{
            type: Input
        }], disabled: [{
            type: Input
        }], source: [{
            type: Input
        }], destination: [{
            type: Input
        }], destinationChange: [{
            type: Output
        }] }); })();

class AngularDualListBoxModule {
}
AngularDualListBoxModule.ɵfac = function AngularDualListBoxModule_Factory(t) { return new (t || AngularDualListBoxModule)(); };
AngularDualListBoxModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AngularDualListBoxModule });
AngularDualListBoxModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AngularDualListBoxModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule
                ],
                declarations: [DualListComponent],
                exports: [DualListComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AngularDualListBoxModule, { declarations: [DualListComponent], imports: [CommonModule,
        FormsModule], exports: [DualListComponent] }); })();

/*
 * Public API Surface of angular-dual-listbox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularDualListBoxModule, BasicList, DualListComponent };
//# sourceMappingURL=angular-dual-listbox.mjs.map
