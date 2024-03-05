import {of,from,Observable } from 'rxjs'
import {take,map,filter,scan} from 'rxjs/operators'

const arr$ = of('John','Jvan','Salomon')

const btn = document.getElementById('rxjs')
btn.addEventListener('click',()=>{
    // arr$
    //   .pipe(
    //     tap(v => console.log('Tap: ', v)),
    //     take(5),
    //     map(v => v * 3),
    //     filter(v => v % 2 === 0),
    //     take(10),
    //     takeLast(5)
    //     takeWhile(v => v < 7)
    //     scan((acc, v) => acc + v, 0),
    //     reduce((acc, v) => acc + v, 0),
    // ).subscribe(res=>{
    //     console.log(res)
    // })

    const stream$ = new Observable(observer => {

        observer.next('Start')
        setTimeout(() => observer.next('One'), 1000)
        setTimeout(() => observer.next('Two'), 2000)
        //setTimeout(() => observer.error('Two'), 2000)
        setTimeout(() => observer.next('Three'), 3000)
        setTimeout(() => observer.complete('Three'), 4000)
      })
      
      stream$.subscribe(
        (val) => console.log('Value: ', val),
        (err) => console.log(err),
        () => console.log('Complete')
      )

      stream$.subscribe({
      next(val) {
        console.log(val)
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log('Complete')
      }
    })
})

fromEvent(document, 'click')
  .pipe(
    switchMap(event => {
      return interval(1000)
        .pipe(
          tap(v => console.log('Tap: ', v)),
          take(5),
          reduce((acc, v) => acc + v, 0)
        )
    })
  )
  .subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Complete')
  })

// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
//     map(e => ({
//       x: e.offsetX,
//       y: e.offsetY,
//       ctx: e.target.getContext('2d')
//     }))
//   )
//   .subscribe(pos => {
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//   })
//
// const clear$ = fromEvent(document.getElementById('clear'), 'click')
//
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas')
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })

// const sub = interval(500).subscribe(v => console.log(v))
//
// setTimeout(() => {
//   sub.unsubscribe()
// }, 4000)

// timer(2500).subscribe(v => console.log(v))

//range(42, 10).subscribe(v => console.log(v))

