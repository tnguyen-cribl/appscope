---
title: Requirements
---

## Requirements

Requirements for AppScope are as follows:

### Operating Systems (Linux Only)

AppScope runs on:

- Ubuntu 16 and later
- Alpine and other distributions based on musl libc
- RedHat Enterprise Linux or CentOS 7 and later
- Amazon Linux 1 and 2
- Debian

When building AppScope from source, use:

- Ubuntu 18.04

This restriction is imposed to make the resulting executable more portable.

### System

- CPU: x86-64 architecture
- Memory: 1GB
- Disk: 20MB (library + CLI)

### Filesystem Configuration

The distros that AppScope supports all require the use of `/tmp`, `/dev/shm`, and `/proc`. You should avoid custom filesystem configuration that interferes with AppScope's ability to use these directories.

### Known Limitations

These runtimes are **not** supported: Open JVM < v.6, Oracle JVM < v.6, Go < v.1.8.

AppScope cannot:

- Unload the libscope library.
- Unattach/detach from a running process, once attached.

When an executable that's being scoped has been [stripped](https://en.wikipedia.org/wiki/Strip_(Unix)), it is not possible for `libscope.so` to obtain a file descriptor for an SSL session, and in turn, AppScope cannot include IP and port number fields in HTTP events.
