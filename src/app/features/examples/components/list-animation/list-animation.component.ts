import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {photoListAnimation} from './photo-list.animation';

@Component({
    selector: 'list-animation',
    templateUrl: './list-animation.component.html',
    styleUrls: ['./list-animation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [photoListAnimation]
})
export class ListAnimationComponent implements OnInit, AfterViewInit, OnDestroy {
    
    public photoList: string[] = [];
    
    public template: TemplateRef<any>;
    
    constructor(
            private cd: ChangeDetectorRef
    ) {
    }
    
    ngOnInit() {
        this.initPhotoList();
    }
    
    ngAfterViewInit(): void {
    }
    
    ngOnDestroy(): void {
    }
    
    initPhotoList = () => {
        this.photoList = [
            'assets/images/wolf.jpg',
            'assets/images/ice_dragon.jpg',
            'assets/images/cat.png',
            'assets/images/hippo.png',
            'assets/images/fire_dragon.png'
        ];
        this.cd.detectChanges();
    };
    
    destroyPhotoList = () => {
        this.photoList = [];
        this.cd.detectChanges();
    };
    
    addPhoto = () => {
        this.photoList.push('assets/images/fire_dragon.png');
    };
    
    deletePhoto = () => {
        this.photoList.splice(this.photoList.length - 1, 1);
    };
}
