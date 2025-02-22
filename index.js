import cluster from "cluster";
import os from "os";

const totalCPUs = os.cpus().length;
const N = 1_000_000_000; 

if (cluster.isPrimary) {
  let sum = 0;
  let completedWorkers = 0;
  const chunkSize = Math.floor(N / totalCPUs);

  console.log(`primary ${process.pid} is running`);

  for (let i = 0; i < totalCPUs; i++) {
    const start = i * chunkSize + 1;
    const end = i === totalCPUs - 1 ? N : (i + 1) * chunkSize;

    const worker = cluster.fork({ START: start, END: end });

    worker.on("message", (partialSum) => {
      sum += partialSum;
      completedWorkers++;

      if (completedWorkers === totalCPUs) {
        console.log(`Final Sum: ${sum}`);
        process.exit();
      }
    });
  }
} else {
  const start = Number(process.env.START);
  const end = Number(process.env.END);
  const localSum = ((end * (end + 1)) - (start * (start - 1))) / 2;

  process.send(localSum);
  process.exit();
}
//https://jksnu.blogspot.com/2022/02/cluster-in-node-js-application.html