import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgDefaultList } from './core/pattern/ng-default-list';
import { NgTooltipEnum } from './core/enum/tooltip-position.enum';
import { ActivatedRoute } from '@angular/router';
import { AppController } from './core/appController';
import { Constants } from './core/pattern/constants';
import { TableOrder } from './core/enum/order.enum';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import {
  pluck,
  mergeMap,
  combineLatest,
  map,
  filter,
  flatMap,
  mergeAll,
  zip,
  zipAll,
  switchMap,
  tap,
} from 'rxjs/operators';
import { TableDataModel } from './core/models/table-data.model';
import { of } from 'rxjs';
import { EditDialogComponent } from './components/edit/edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent extends NgDefaultList implements OnInit {
  
  update() {
    console.log('clicked update btn');
  }

  readonly path_details = Constants.defaultPattern.routesPath.details;

  add() {
    console.log('clicked add btn');
  }

  title = 'front-end-test';
  skilsHasBeenChanged: boolean = false;
  eu: Array<any> = []
  tableOrder: TableOrder = TableOrder.ASC;

  constructor(
    public appController: AppController,
    protected route: ActivatedRoute,
    private service: AppService,
    public cdr: ChangeDetectorRef,
    private http: HttpClient
  ) {
    super(route, appController, {
      columnsTable: ['imagem', 'nome', 'habilidades', 'tipo', 'ação'],
      classes: {
        imagem: ['make-gold'],
        nome: ['post-col'],
        habilidades: ['stars-col'],
        tipo: ['views-col'],
        ação: ['info-col'],
      },
      tooltip: {
        issues: {
          position: {
            title: NgTooltipEnum.ACIMA,
            subtitle: NgTooltipEnum.ACIMA,
          },
          classes: [],
        },
      },
    });
  }

  ngOnInit(): void {
    this.data = this.service.getLimitedByDefaultApi(5).pipe(
      pluck('results'),
      mergeMap((c: any) => c),
      combineLatest((x: any) => this.http.get(x.url)),
      zipAll(),
      mergeMap((s: any) => s),
      combineLatest((s: any) => {
        return of({
          id: s.id,
          abilities: s.abilities.map((a: any) => a.ability.name),
          name: s.name,
          types: s.types.map((c: any) => c.type.name),
          sprite: {
            front: s.sprites.front_default,
            back: s.sprites.back_default,
          },
        });
      }),
      zipAll()
    );
  }

  componentRowClicked(data: any) {
    const dialogRef = this.appController.showToastPopUp(
      {
        style: {},
        value: data,
      },
      EditDialogComponent
    );

    dialogRef.afterClosed()
    .pipe(
      tap(emitted => {
        console.log('emitted: ', emitted)
        alert('still pending some store data and stuff')
      })
    ).subscribe();

    //TODO: remove all subscribes open in application and store data.
  }

  customDataCell(payload: { col: number; data: TableDataModel }) {
    const { col, data } = payload;
    return data.abilities.toString();
  }

  public getHtml(payload: { col: number; data: TableDataModel }): string {
    const { col, data } = payload;

    const obj: any = {
      1: `<div class="iss-content">
            <span class="iss-table-line"><img class="iss-table-line__svg" src="${data.sprite.front}"></span>
          </div>`,
      2: `<div class="iss-content iss-content-row">
            <span class="iss-table-line iss-table-line__data">${data.name}</span>
          </div>`,
      3: `<div class="iss-content iss-content-row">
            <span id="span_${col}_${data.id}"></span>
          </div>`,
      4: `<div class="iss-content iss-content-row">
            <span class="iss-table-line iss-table-line__data">${data.types.toString()}</span>
          </div>`,
      5: `<div class="iss-content info-content" style="cursor: pointer">
            Editar
          </div>`,
    };

    return obj[col] || undefined;
  }

  teste() {
    console.log('chegou em teste')
  }
}
