# Load Testing Concepts


## 1️⃣ Question

What is the difference between Load, Stress, Spike, and Soak testing?

**Answer:**

| Feature / Aspect | Load Testing                                           | Stress Testing                                                | Spike Testing                                            | Soak Testing                                                          |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------- |
| Purpose          | Measures system performance under expected normal load | Evaluates system behavior under extreme or beyond-normal load | Checks system response to sudden large increases in load | Assesses system performance under normal load over an extended period |
| Goal             | Ensure system can handle expected user load            | Identify breaking point of the system                         | Test system stability under sudden spikes                | Detect memory leaks or performance degradation over time              |
| Duration         | Short to medium duration                               | Short, until system fails                                     | Very short, sudden increase                              | Long duration, extended usage                                         |
| Load Pattern     | Gradually increasing to expected load                  | Gradually or suddenly increasing to extreme load              | Sudden, sharp increase in load                           | Constant normal load over long time                                   |

---

## 2️⃣ Question

What are throughput and latency in load testing?

**Answer:**

* **Throughput:** Number of transactions or requests a system can handle per unit of time (e.g., requests/sec).
* **Latency:** Time taken to process a single request, usually measured from request initiation to response.

---

## 3️⃣ Question

What metrics do you monitor during a load test?

**Answer:**
Common metrics include:

* **Response Time / Latency**
* **Throughput**
* **Error Rate**
* **CPU and Memory Usage**
* **Disk I/O and Network I/O**
* **Concurrent Users / Sessions**
* **Application-specific metrics (e.g., database connections, cache hits/misses)**
