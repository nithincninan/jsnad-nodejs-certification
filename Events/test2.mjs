
import events from "events";

const ee = new events.EventEmitter()

const abort = new AbortController()

setTimeout(() => {
  ee.emit('data', { ok: "okay"});
}, 3000);

setTimeout(() => {
  abort.abort('Timeout');
}, 1000);

try {
  const outPut = await events.once(ee, 'data', { signal: abort.signal})
  console.log(outPut);
} catch(err) {
  if(err.code !== 'ABORT_ERR') throw err;
  console.log('Error ==>', err);
}

console.log('end');
