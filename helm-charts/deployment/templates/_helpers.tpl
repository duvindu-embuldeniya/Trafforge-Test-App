{{- define "my-k8s-app.name" -}}
{{ .Chart.Name }}
{{- end }}

{{- define "my-k8s-app.fullname" -}}
{{ .Release.Name }}-{{ .Chart.Name }}
{{- end }}