@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class ServiceComponent extends ItemComponent {

  startSchedule:any = "";
  endSchedule:any = "";
  daysAvailableTemp:any = [
    {day: 'monday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]},
    {day: 'tuesday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]},
    {day: 'wednesday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]},
    {day: 'thursday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]},
    {day: 'friday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]},
    {day: 'saturday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]},
    {day: 'sunday', turns: [{turn: 'morning', startTime: '', endTime: '', closed: true}, {turn: 'afternoon', startTime: '', endTime: '', closed: true}]}
  ];
  
    addTurn(){
    this.daysAvailableTemp.forEach(dayAvailable => {
      if (dayAvailable.day == this.day) {
        dayAvailable.turns.forEach(turn => {
          if (turn.turn == this.turn){
            turn.startTime = this.startSchedule;
            turn.endTime = this.endSchedule;
            turn.closed = false;
          }
        })
      }
    });
  }

  closeTurn(turn){
    turn.startTime = "";
    turn.endTime = "";
    turn.closed = true;
  }

}
